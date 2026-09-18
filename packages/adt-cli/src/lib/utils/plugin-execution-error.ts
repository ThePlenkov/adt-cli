const GENERIC_FAILURE = '❌ Command failed: unexpected failure';
const CODE_PATTERN = /^[a-z0-9_]{1,64}$/i;
const MAX_MESSAGE_LENGTH = 300;

/** Collapse plugin text to a single safe log line: no escape sequences, bounded length. */
function sanitizeLogText(text: string): string {
  return (
    text
      // eslint-disable-next-line no-control-regex
      .replaceAll(
        /\x1b\[[0-9;:]*[ -/]*[@-~]|\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g,
        '',
      )
      // eslint-disable-next-line no-control-regex
      .replaceAll(/[\x00-\x1f\x7f-\x9f]/g, ' ')
      .replaceAll(/\s+/g, ' ')
      .trim()
      .slice(0, MAX_MESSAGE_LENGTH)
  );
}

/**
 * Render typed plugin failures as a stable single-line message so CI logs do
 * not expose implementation stacks, control sequences, or arbitrary thrown
 * values. Only errors carrying a well-formed `code` are treated as typed;
 * anything else falls back to a generic message.
 */
export function formatPluginExecutionError(error: unknown): string {
  if (!(error instanceof Error)) {
    return GENERIC_FAILURE;
  }
  const code = (error as { code?: unknown }).code;
  if (typeof code !== 'string' || !CODE_PATTERN.test(code)) {
    return GENERIC_FAILURE;
  }
  const message = sanitizeLogText(error.message);
  return message
    ? `❌ Command failed [${code}]: ${message}`
    : `❌ Command failed [${code}]`;
}
