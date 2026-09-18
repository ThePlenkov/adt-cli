/** Render typed plugin failures without leaking implementation stacks to CI. */
export function formatPluginExecutionError(error: unknown): string {
  if (error instanceof Error) {
    const code =
      typeof (error as { code?: unknown }).code === 'string'
        ? (error as { code: string }).code
        : undefined;
    return code
      ? `❌ Command failed [${code}]: ${error.message}`
      : `❌ Command failed: ${error.message}`;
  }
  return '❌ Command failed: unexpected non-error failure';
}
