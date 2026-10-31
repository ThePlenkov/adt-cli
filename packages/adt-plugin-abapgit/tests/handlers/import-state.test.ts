import { afterEach, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { createAdk } from '@abapify/adk';
import type { ImportContext } from '@abapify/adt-plugin';
import { abapGitPlugin } from '../../src/lib/abapgit.ts';

const directories: string[] = [];
function directory() {
  const target = mkdtempSync(join(tmpdir(), 'abapgit-import-state-'));
  directories.push(target);
  return target;
}
function object(name: string) {
  const adk = createAdk({
    adt: {
      oo: {
        classes: {
          source: {
            main: {
              get: async () => `CLASS ${name} DEFINITION PUBLIC. ENDCLASS.`,
            },
          },
        },
      },
    },
  } as never);
  return adk.getWithData(
    { name, language: 'EN', include: [{ includeType: 'main' }] },
    'CLAS',
  );
}
function context(folderLogic: string): ImportContext {
  return {
    resolvePackagePath: async () => ['ZROOT', 'ZROOT_CHILD'],
    formatOptions: { folderLogic },
  };
}
afterEach(() => {
  for (const target of directories.splice(0))
    rmSync(target, { recursive: true, force: true });
});

for (const relativeTarget of [false, true]) {
  it(`refreshes a cached cleanup index after an import using ${relativeTarget ? 'relative' : 'absolute'} paths`, async () => {
    const target = directory();
    const owner = { pgmid: 'R3TR', type: 'CLAS', name: 'ZCL_CREATED' };
    const empty = await abapGitPlugin.format.delete!(
      owner,
      target,
      context('prefix'),
    );
    assert.equal(empty.success, true);
    assert.equal(empty.filesRemoved.length, 0);
    const importTarget = relativeTarget
      ? relative(process.cwd(), target)
      : target;
    const imported = await abapGitPlugin.format.import(
      object(owner.name) as never,
      importTarget,
      context('prefix'),
    );
    assert.equal(imported.success, true);
    assert.equal(imported.filesCreated.length, 2);
    const removed = await abapGitPlugin.format.delete!(
      owner,
      target,
      context('prefix'),
    );
    assert.equal(removed.success, true);
    assert.equal(removed.filesRemoved.length, 2);
    for (const file of imported.filesCreated)
      assert.equal(existsSync(file), false);
  });
}

it('drops a completed batch index before a later cleanup observes new files', async () => {
  const target = directory();
  const owner = { pgmid: 'R3TR', type: 'CLAS', name: 'ZCL_LATER' };
  await abapGitPlugin.format.delete!(owner, target, context('prefix'));
  await abapGitPlugin.hooks!.afterImport!(target);
  mkdirSync(join(target, 'src'));
  const file = join(target, 'src/zcl_later.clas.abap');
  writeFileSync(file, 'new source');
  const result = await abapGitPlugin.format.delete!(
    owner,
    target,
    context('prefix'),
  );
  assert.equal(result.success, true);
  assert.equal(result.filesRemoved.length, 1);
  assert.equal(existsSync(file), false);
});

it('keeps each output folder logic when another import finishes before its hook', async () => {
  const full = directory();
  const prefix = directory();
  const imported = await Promise.all([
    abapGitPlugin.format.import(
      object('ZCL_FULL') as never,
      full,
      context('full'),
    ),
    abapGitPlugin.format.import(
      object('ZCL_PREFIX') as never,
      prefix,
      context('prefix'),
    ),
  ]);
  assert.ok(imported.every((result) => result.success));
  await abapGitPlugin.hooks!.afterImport!(full);
  await abapGitPlugin.hooks!.afterImport!(prefix);
  assert.match(
    readFileSync(join(full, '.abapgit.xml'), 'utf8'),
    /<FOLDER_LOGIC>FULL<\/FOLDER_LOGIC>/,
  );
  assert.match(
    readFileSync(join(prefix, '.abapgit.xml'), 'utf8'),
    /<FOLDER_LOGIC>PREFIX<\/FOLDER_LOGIC>/,
  );
  assert.ok(existsSync(join(full, 'src/zroot/zroot_child/zcl_full.clas.abap')));
  assert.ok(existsSync(join(prefix, 'src/child/zcl_prefix.clas.abap')));
});
