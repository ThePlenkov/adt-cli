/**
 * Unit tests for the built-in basic auth plugin contract
 */
import { describe, it, expect } from 'vitest';
import basicPlugin from '../src/plugins/basic';

describe('basic auth plugin', () => {
  it('exposes a default export with authenticate()', () => {
    expect(typeof basicPlugin.authenticate).toBe('function');
  });

  it('returns an AuthPluginResult with method basic', async () => {
    const result = await basicPlugin.authenticate({
      url: 'https://sap.example.com',
      username: 'DEVELOPER',
      password: 's3cret',
    });

    expect(result.method).toBe('basic');
    expect(result.credentials).toEqual({
      username: 'DEVELOPER',
      password: 's3cret',
    });
  });

  it('rejects when username is missing', async () => {
    await expect(
      basicPlugin.authenticate({
        url: 'https://sap.example.com',
        username: '',
        password: 's3cret',
      }),
    ).rejects.toThrow(/username and password/);
  });

  it('rejects when password is missing', async () => {
    await expect(
      basicPlugin.authenticate({
        url: 'https://sap.example.com',
        username: 'DEVELOPER',
        password: '',
      }),
    ).rejects.toThrow(/username and password/);
  });
});
