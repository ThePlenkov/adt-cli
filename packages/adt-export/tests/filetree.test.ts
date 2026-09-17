/**
 * Unit tests for FileTree implementations
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  FsFileTree,
  MemoryFileTree,
  FilteredFileTree,
  findAbapGitRoot,
  resolveFilesRelativeToRoot,
} from '../src/utils/filetree';

describe('MemoryFileTree', () => {
  const tree = new MemoryFileTree(
    '/repo',
    new Map([
      ['src/zcl_test.clas.abap', 'CLASS zcl_test DEFINITION.'],
      ['src/zcl_test.clas.xml', '<abapgit/>'],
      ['src/sub/zif_x.intf.abap', 'INTERFACE zif_x.'],
      ['.abapgit.xml', '<abapgit/>'],
    ]),
  );

  it('reads files', async () => {
    expect(await tree.read('src/zcl_test.clas.abap')).toBe(
      'CLASS zcl_test DEFINITION.',
    );
  });

  it('throws on missing file', async () => {
    await expect(tree.read('nope.txt')).rejects.toThrow(/File not found/);
  });

  it('glob * does not cross directories', async () => {
    const hits = await tree.glob('src/*.clas.abap');
    expect(hits).toEqual(['src/zcl_test.clas.abap']);
  });

  it('glob ** crosses directories', async () => {
    const hits = await tree.glob('**/*.abap');
    expect(hits.sort()).toEqual([
      'src/sub/zif_x.intf.abap',
      'src/zcl_test.clas.abap',
    ]);
  });

  it('glob escapes regex metacharacters in pattern', async () => {
    // '+', '(' etc. in the pattern must not be treated as regex
    const hits = await tree.glob('src/zcl_test.clas.abap');
    expect(hits).toEqual(['src/zcl_test.clas.abap']);
  });

  it('exists() reflects map membership', async () => {
    expect(await tree.exists('.abapgit.xml')).toBe(true);
    expect(await tree.exists('missing')).toBe(false);
  });

  it('readdir lists immediate children including directories', async () => {
    expect((await tree.readdir('')).sort()).toEqual(['.abapgit.xml', 'src']);
    expect((await tree.readdir('src')).sort()).toEqual([
      'sub',
      'zcl_test.clas.abap',
      'zcl_test.clas.xml',
    ]);
  });
});

describe('FsFileTree', () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'adt-export-fs-'));
    await mkdir(join(dir, 'sub'), { recursive: true });
    await writeFile(join(dir, 'hello.txt'), 'hi', 'utf8');
    await writeFile(join(dir, 'bom.txt'), '﻿content', 'utf8');
    await writeFile(join(dir, 'sub', 'nested.txt'), 'n', 'utf8');
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it('reads and exists', async () => {
    const tree = new FsFileTree(dir);
    expect(await tree.read('hello.txt')).toBe('hi');
    expect(await tree.exists('hello.txt')).toBe(true);
    expect(await tree.exists('nope')).toBe(false);
  });

  it('strips UTF-8 BOM when reading', async () => {
    const tree = new FsFileTree(dir);
    expect(await tree.read('bom.txt')).toBe('content');
  });

  it('glob finds nested files', async () => {
    const tree = new FsFileTree(dir);
    const hits = await tree.glob('**/*.txt');
    expect(hits.sort()).toEqual(['bom.txt', 'hello.txt', 'sub/nested.txt']);
  });
});

describe('FilteredFileTree', () => {
  const inner = new MemoryFileTree(
    '/repo',
    new Map([
      ['z.clas.xml', '<abapgit/>'],
      ['z.clas.abap', 'CLASS z.'],
      ['z.clas.testclasses.abap', '* tests'],
      ['z.clas.locals_def.abap', '* locals'],
      ['other.clas.abap', 'CLASS other.'],
      ['.abapgit.xml', '<abapgit/>'],
    ]),
  );
  const tree = new FilteredFileTree(inner, ['z.clas.xml']);

  it('lets the allowed file through', async () => {
    expect(await tree.glob('z.clas.xml')).toEqual(['z.clas.xml']);
  });

  it('lets companion files through (same base prefix)', async () => {
    const hits = await tree.glob('*.abap');
    expect(hits.sort()).toEqual([
      'z.clas.abap',
      'z.clas.locals_def.abap',
      'z.clas.testclasses.abap',
    ]);
  });

  it('always lets .abapgit.xml metadata through', async () => {
    expect(await tree.glob('.abapgit.xml')).toEqual(['.abapgit.xml']);
  });
});

describe('findAbapGitRoot', () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), 'adt-export-root-'));
    await mkdir(join(dir, 'a/b/c'), { recursive: true });
    await writeFile(join(dir, '.abapgit.xml'), '<x/>', 'utf8');
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it('walks up to the dir containing .abapgit.xml', () => {
    expect(findAbapGitRoot(join(dir, 'a/b/c'))).toBe(dir);
  });

  it('finds root from an intermediate directory too', () => {
    expect(findAbapGitRoot(join(dir, 'a/b'))).toBe(dir);
  });

  it('returns undefined when no .abapgit.xml exists', async () => {
    const empty = await mkdtemp(join(tmpdir(), 'adt-export-noroot-'));
    try {
      await mkdir(join(empty, 'x/y'), { recursive: true });
      expect(findAbapGitRoot(join(empty, 'x/y'))).toBeUndefined();
    } finally {
      await rm(empty, { recursive: true, force: true });
    }
  });
});

describe('resolveFilesRelativeToRoot', () => {
  it('maps cwd-relative paths to repo-root-relative', () => {
    const out = resolveFilesRelativeToRoot(
      ['b/file.txt', '../root.txt'],
      '/repo/a',
      '/repo',
    );
    expect(out).toEqual(['a/b/file.txt', 'root.txt']);
  });
});
