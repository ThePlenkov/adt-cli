/**
 * Bundles the ADT CLI (bin/adt-all.ts — with preloaded plugins) into a single
 * minified ESM file with zero runtime dependencies.
 *
 * Dynamic `import()` calls with runtime-computed specifiers (plugin loader,
 * config files) stay dynamic: Node resolves them upward from the installed
 * package, so globally-installed plugins keep working.
 *
 * Not bundled:
 * - react-devtools-core — optional ink peer, only used when devtools are
 *   enabled; stubbed with a no-op.
 * - yoga.wasm — resolved at runtime via import.meta.url; copied next to the
 *   bundle so the relative URL keeps working.
 */

import { join } from 'node:path';

const res = await Bun.build({
  entrypoints: ['../adt-cli/src/bin/adt-all.ts'],
  target: 'node',
  minify: true,
  plugins: [
    {
      name: 'stub-optional-deps',
      setup(build) {
        build.onResolve({ filter: /^react-devtools-core$/ }, () => ({
          path: join(import.meta.dir, 'stubs/react-devtools-core.mjs'),
        }));
      },
    },
  ],
});

if (!res.success) {
  for (const log of res.logs) console.error(log);
  process.exit(1);
}

for (const out of res.outputs) {
  await Bun.write('dist/adt.mjs', out);
}

const yogaWasm = Bun.resolveSync(
  'yoga-wasm-web/dist/yoga.wasm',
  import.meta.dir,
);
await Bun.write('dist/yoga.wasm', Bun.file(yogaWasm));
console.log('bundled -> dist/adt.mjs + dist/yoga.wasm');
