import { describe, expect, it } from 'vitest';
import { formatPluginExecutionError } from './plugin-execution-error';

describe('formatPluginExecutionError', () => {
  it('renders a typed domain failure without its stack', () => {
    const error = Object.assign(
      new Error('Source history did not prove an exact transport boundary.'),
      { code: 'manifest_inexact' },
    );
    error.stack = 'internal stack that must not reach CI logs';

    expect(formatPluginExecutionError(error)).toBe(
      '❌ Command failed [manifest_inexact]: Source history did not prove an exact transport boundary.',
    );
  });

  it('does not stringify an arbitrary thrown value', () => {
    expect(formatPluginExecutionError({ token: 'must-not-be-logged' })).toBe(
      '❌ Command failed: unexpected non-error failure',
    );
  });
});
