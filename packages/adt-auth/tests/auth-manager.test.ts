/**
 * Unit tests for AuthManager
 *
 * The fake plugin is a real module loaded through the same dynamic-import
 * path AuthManager uses in production (absolute path as plugin specifier).
 * Its behavior is steered via `globalThis.__FAKE_PLUGIN`.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AuthManager } from '../src/auth-manager';
import { FileStorage } from '../src/storage/file-storage';
import type { AuthSession, CookieCredentials } from '../src/types';

const FAKE_PLUGIN = fileURLToPath(
  new URL('./fixtures/fake-plugin.ts', import.meta.url),
);

declare global {
  var __FAKE_PLUGIN:
    | {
        authenticateCalls: number;
        refreshCalls: number;
        authenticateResult?: unknown;
        refreshResult?: unknown;
        hasRefresh?: boolean;
      }
    | undefined;
}

function resetFakePlugin() {
  globalThis.__FAKE_PLUGIN = {
    authenticateCalls: 0,
    refreshCalls: 0,
    hasRefresh: true,
  };
  return globalThis.__FAKE_PLUGIN;
}

describe('AuthManager', () => {
  let dir: string;
  let manager: AuthManager;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'adt-auth-mgr-'));
    manager = new AuthManager(new FileStorage(dir));
    resetFakePlugin();
  });

  afterEach(async () => {
    delete globalThis.__FAKE_PLUGIN;
    await rm(dir, { recursive: true, force: true });
  });

  // =========================================================================
  // login()
  // =========================================================================

  it('login() authenticates via plugin and persists the session', async () => {
    const session = await manager.login('trl', {
      type: FAKE_PLUGIN,
      options: { url: 'https://sap.example.com', client: '100' },
    });

    expect(session.sid).toBe('TRL'); // upper-cased
    expect(session.host).toBe('https://sap.example.com');
    expect(session.client).toBe('100');
    expect(session.auth.method).toBe('cookie');
    expect(session.auth.plugin).toBe(FAKE_PLUGIN);
    const creds = session.auth.credentials as CookieCredentials;
    expect(creds.cookies).toBe('SAP_SESSIONID=fake-1');
    expect(new Date(creds.expiresAt).getTime()).toBeGreaterThan(Date.now());

    // persisted
    expect(manager.getSession('TRL')).toEqual(session);
  });

  it('login() sets the first system as default SID', async () => {
    await manager.login('TRL', {
      type: FAKE_PLUGIN,
      options: { url: 'https://sap.example.com' },
    });
    expect(manager.getDefaultSid()).toBe('TRL');

    // second login does not steal the default
    await manager.login('DEV', {
      type: FAKE_PLUGIN,
      options: { url: 'https://sap2.example.com' },
    });
    expect(manager.getDefaultSid()).toBe('TRL');
    expect(manager.listSids().sort()).toEqual(['DEV', 'TRL']);
  });

  it('login() rejects a plugin without a default authenticate export', async () => {
    await expect(
      manager.login('TRL', {
        type: fileURLToPath(
          new URL('./fixtures/no-default-plugin.ts', import.meta.url),
        ),
        options: { url: 'https://sap.example.com' },
      }),
    ).rejects.toThrow(/does not have a default export with authenticate/);
  });

  // =========================================================================
  // Session helpers
  // =========================================================================

  it('isExpired() is false for basic auth, true for past cookie expiry', async () => {
    const state = resetFakePlugin();
    state.authenticateResult = {
      method: 'basic',
      credentials: { username: 'u', password: 'p' },
    };
    const basic = await manager.login('BAS', {
      type: FAKE_PLUGIN,
      options: { url: 'https://x' },
    });
    expect(manager.isExpired(basic)).toBe(false);

    state.authenticateResult = {
      method: 'cookie',
      credentials: {
        cookies: 'c',
        expiresAt: new Date(Date.now() - 1000), // already expired
      },
    };
    const cookie = await manager.login('EXP', {
      type: FAKE_PLUGIN,
      options: { url: 'https://x' },
    });
    expect(manager.isExpired(cookie)).toBe(true);
  });

  it('getCookieHeader / getBasicAuth return method-appropriate values', async () => {
    const state = resetFakePlugin();
    const cookie = await manager.login('CK', {
      type: FAKE_PLUGIN,
      options: { url: 'https://x' },
    });
    expect(manager.getCookieHeader(cookie)).toBe('SAP_SESSIONID=fake-1');
    expect(manager.getBasicAuth(cookie)).toBeNull();

    state.authenticateResult = {
      method: 'basic',
      credentials: { username: 'u', password: 'p' },
    };
    const basic = await manager.login('BA', {
      type: FAKE_PLUGIN,
      options: { url: 'https://x' },
    });
    expect(manager.getCookieHeader(basic)).toBeNull();
    expect(manager.getBasicAuth(basic)).toEqual({
      username: 'u',
      password: 'p',
    });
  });

  it('getSession() falls back to the default SID', async () => {
    expect(manager.getSession()).toBeNull();
    await manager.login('TRL', {
      type: FAKE_PLUGIN,
      options: { url: 'https://x' },
    });
    expect(manager.getSession()?.sid).toBe('TRL');
  });

  // =========================================================================
  // refreshCredentials()
  // =========================================================================

  function expiredCookieSession(sid: string): AuthSession {
    return {
      sid,
      host: 'https://sap.example.com',
      auth: {
        method: 'cookie',
        plugin: FAKE_PLUGIN,
        pluginOptions: { url: 'https://sap.example.com' },
        credentials: {
          cookies: 'SAP_SESSIONID=stale',
          expiresAt: new Date(Date.now() - 1000).toISOString(),
        },
      },
    };
  }

  it('refreshCredentials() uses plugin.refresh() and saves the result', async () => {
    const state = resetFakePlugin();
    const session = expiredCookieSession('TRL');
    manager.saveSession(session);

    const updated = await manager.refreshCredentials(session, {
      log: () => undefined,
    });

    expect(state.refreshCalls).toBe(1);
    expect(state.authenticateCalls).toBe(0);
    expect((updated!.auth.credentials as CookieCredentials).cookies).toBe(
      'SAP_SESSIONID=refreshed-1',
    );
    expect(manager.getSession('TRL')).toEqual(updated);
  });

  it('refreshCredentials() falls back to authenticate() when refresh returns null', async () => {
    const state = resetFakePlugin();
    state.refreshResult = null;
    const session = expiredCookieSession('TRL');
    manager.saveSession(session);

    const updated = await manager.refreshCredentials(session, {
      log: () => undefined,
    });

    expect(state.refreshCalls).toBe(1);
    expect(state.authenticateCalls).toBe(1);
    expect((updated!.auth.credentials as CookieCredentials).cookies).toBe(
      'SAP_SESSIONID=fake-1',
    );
  });

  it('refreshCredentials() calls authenticate() when plugin has no refresh()', async () => {
    const state = resetFakePlugin();
    state.hasRefresh = false;
    const session = expiredCookieSession('TRL');

    const updated = await manager.refreshCredentials(session, {
      log: () => undefined,
    });

    expect(state.refreshCalls).toBe(0);
    expect(state.authenticateCalls).toBe(1);
    expect((updated!.auth.credentials as CookieCredentials).cookies).toBe(
      'SAP_SESSIONID=fake-1',
    );
  });

  it('refreshCredentials() returns null when session has no plugin', async () => {
    const session: AuthSession = {
      sid: 'TRL',
      host: 'https://x',
      auth: {
        method: 'basic',
        credentials: { username: 'u', password: 'p' },
      },
    };
    expect(await manager.refreshCredentials(session)).toBeNull();
  });
});
