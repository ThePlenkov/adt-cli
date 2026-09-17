/**
 * Unit tests for FileStorage
 *
 * Uses a temp directory as baseDir — never touches real ~/.adt.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm } from 'node:fs/promises';
import { writeFileSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { FileStorage } from '../src/storage/file-storage';
import type { AuthSession } from '../src/types';

function makeSession(sid: string): AuthSession {
  return {
    sid,
    host: 'https://sap.example.com',
    client: '100',
    auth: {
      method: 'cookie',
      plugin: '@abapify/adt-auth/basic',
      credentials: {
        cookies: 'SAP_SESSIONID=abc123',
        expiresAt: new Date(Date.now() + 3600_000).toISOString(),
      },
    },
  };
}

describe('FileStorage', () => {
  let dir: string;
  let storage: FileStorage;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'adt-auth-test-'));
    storage = new FileStorage(dir);
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it('saves and loads a session', () => {
    const session = makeSession('TRL');
    storage.save(session);

    const loaded = storage.load('TRL');
    expect(loaded).toEqual(session);
  });

  it('writes session files with owner-only permissions (0600)', () => {
    storage.save(makeSession('TRL'));
    const mode = statSync(join(dir, 'sessions', 'TRL.json')).mode & 0o777;
    expect(mode).toBe(0o600);
  });

  it('returns null for a missing session', () => {
    expect(storage.load('NOSUCH')).toBeNull();
  });

  it('throws a descriptive error on corrupt session JSON', () => {
    const sessionsDir = join(dir, 'sessions');
    writeFileSync(join(sessionsDir, 'BAD.json'), '{not json', 'utf8');
    expect(() => storage.load('BAD')).toThrow(/Failed to load session BAD/);
  });

  it('deletes a session', () => {
    storage.save(makeSession('TRL'));
    expect(storage.exists('TRL')).toBe(true);
    storage.delete('TRL');
    expect(storage.exists('TRL')).toBe(false);
    expect(storage.load('TRL')).toBeNull();
  });

  it('delete on a missing session is a no-op', () => {
    expect(() => storage.delete('NOSUCH')).not.toThrow();
  });

  it('lists SIDs for stored sessions only', () => {
    storage.save(makeSession('TRL'));
    storage.save(makeSession('DEV'));
    writeFileSync(join(dir, 'sessions', 'not-a-session.txt'), 'x', 'utf8');

    expect(storage.list().sort()).toEqual(['DEV', 'TRL']);
  });

  it('returns an empty list when no sessions exist', () => {
    expect(storage.list()).toEqual([]);
  });

  it('persists and reads the default SID', () => {
    expect(storage.getDefaultSid()).toBeNull();
    storage.setDefaultSid('TRL');
    expect(storage.getDefaultSid()).toBe('TRL');
    storage.clearDefaultSid();
    expect(storage.getDefaultSid()).toBeNull();
  });

  it('writes config.json with owner-only permissions (0600)', () => {
    storage.setDefaultSid('TRL');
    const mode = statSync(join(dir, 'config.json')).mode & 0o777;
    expect(mode).toBe(0o600);
  });

  it('tolerates corrupt config.json and returns no default SID', () => {
    writeFileSync(join(dir, 'config.json'), '{broken', 'utf8');
    expect(storage.getDefaultSid()).toBeNull();
  });
});
