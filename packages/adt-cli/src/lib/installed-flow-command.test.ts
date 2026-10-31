import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const cliPackageRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../..',
);
describe('installed ADT CLI package', () => {
  it('loads the configured flow command from the CLI production dependency layout', () => {
    const installRoot = join(
      tmpdir(),
      `adt-cli-flow-install-${process.pid}-${Date.now()}`,
    );
    const nodeModules = join(installRoot, 'node_modules');
    const cliInstallRoot = join(nodeModules, '@abapify', 'adt-cli');

    try {
      const cliManifest = JSON.parse(
        readFileSync(join(cliPackageRoot, 'package.json'), 'utf8'),
      ) as { dependencies: Record<string, string> };

      mkdirSync(cliInstallRoot, { recursive: true });
      cpSync(join(cliPackageRoot, 'dist'), join(cliInstallRoot, 'dist'), {
        recursive: true,
      });
      cpSync(
        join(cliPackageRoot, 'package.json'),
        join(cliInstallRoot, 'package.json'),
      );

      // Stage only the CLI's declared runtime dependencies. This mirrors a
      // production install and prevents unrelated workspace hoisting from
      // making an undeclared plugin appear resolvable.
      for (const dependency of Object.keys(cliManifest.dependencies)) {
        const workspaceDependency = join(
          cliPackageRoot,
          'node_modules',
          dependency,
        );
        if (!existsSync(workspaceDependency)) {
          throw new Error(`Missing installed dependency ${dependency}`);
        }
        const installedDependency = join(nodeModules, dependency);
        mkdirSync(dirname(installedDependency), { recursive: true });
        symlinkSync(
          realpathSync(workspaceDependency),
          installedDependency,
          'dir',
        );
      }

      const configPath = join(installRoot, 'flow-smoke.config.mjs');
      writeFileSync(
        configPath,
        'export default { commands: ["@abapify/adt-flow/commands/flow"] };\n',
      );

      const cliPath = join(cliInstallRoot, 'dist/bin/adt.mjs');
      const result = spawnSync(
        process.execPath,
        [cliPath, '--config', configPath, 'flow', 'checkout', 'tr', '--help'],
        { cwd: installRoot, encoding: 'utf8', timeout: 30_000 },
      );

      expect(result.error).toBeUndefined();
      expect(result.status, `${result.stdout}\n${result.stderr}`).toBe(0);
      expect(result.stdout).toContain('--partial');
      expect(result.stdout).toContain('--report <file>');
    } finally {
      rmSync(installRoot, { recursive: true, force: true });
    }
  });
});
