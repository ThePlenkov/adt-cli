/**
 * Unit tests for PKCE helpers
 */
import { describe, it, expect } from 'vitest';
import { createHash } from 'node:crypto';
import {
  generateCodeVerifier,
  generateCodeChallenge,
  generateState,
} from '../src/utils/pkce';

const BASE64URL_RE = /^[A-Za-z0-9_-]+$/;

describe('generateCodeVerifier', () => {
  it('returns a 43-char base64url string (32 random bytes)', () => {
    const v = generateCodeVerifier();
    expect(v).toHaveLength(43);
    expect(v).toMatch(BASE64URL_RE);
  });

  it('produces unique values', () => {
    expect(generateCodeVerifier()).not.toBe(generateCodeVerifier());
  });
});

describe('generateCodeChallenge', () => {
  it('is the SHA-256 of the verifier, base64url-encoded (S256)', () => {
    const verifier = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
    const expected = createHash('sha256').update(verifier).digest('base64url');
    expect(generateCodeChallenge(verifier)).toBe(expected);
  });

  it('matches the RFC 7636 example', () => {
    // RFC 7636 appendix B
    const verifier = 'dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk';
    expect(generateCodeChallenge(verifier)).toBe(
      'E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM',
    );
  });
});

describe('generateState', () => {
  it('returns a 32-char hex string', () => {
    const s = generateState();
    expect(s).toMatch(/^[0-9a-f]{32}$/);
  });
});
