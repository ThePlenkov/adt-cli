/**
 * Unit tests for loadFormatPlugin()
 */
import { describe, it, expect, vi } from 'vitest';
import { loadFormatPlugin } from '../src/utils/format-plugin';

vi.mock('@abapify/adt-plugin-abapgit', () => {
  class AbapGitPlugin {
    name = 'abapgit';
  }
  return { default: AbapGitPlugin };
});

vi.mock('@abapify/adt-plugin-gcts', () => {
  return { GctsPlugin: { name: 'gcts-instance' }, default: undefined };
});

describe('loadFormatPlugin', () => {
  it('resolves the abapgit shortcut to the plugin package', async () => {
    const plugin = await loadFormatPlugin('abapgit');
    expect(plugin.name).toBe('abapgit');
  });

  it('resolves the ag alias to the same plugin package', async () => {
    const plugin = await loadFormatPlugin('ag');
    expect(plugin.name).toBe('abapgit');
  });

  it('resolves the gcts alias and instantiates/uses first export', async () => {
    const plugin = await loadFormatPlugin('gcts');
    expect(plugin.name).toBe('gcts-instance');
  });

  it('treats unknown specs as package names and wraps MODULE_NOT_FOUND', async () => {
    await expect(
      loadFormatPlugin('@abapify/definitely-not-a-real-package'),
    ).rejects.toThrow(/not found.*bun add/);
  });
});
