import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // First vi.mock dynamic-import resolution can exceed the 5s default
    testTimeout: 15000,
  },
});
