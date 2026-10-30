import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import type { SourceVersionRef } from '@abapify/adt-client';
import type { TransportSourceManifest } from '@abapify/adk';
import { abapgitFormatPlugin } from '@abapify/adt-plugin-abapgit';
import { createAdtFlowService } from '../src/service';

const TRANSPORT = 'S0DK958193';
const CLASS_NAME = 'ZCL_VIM_DI3_UTILS';
const CLASS_URI = '/sap/bc/adt/oo/classes/zcl_vim_di3_utils';
const HEAD_SOURCE =
  'CLASS zcl_vim_di3_utils DEFINITION PUBLIC.\nPUBLIC SECTION.\nMETHODS get_po_items_for_docid.\nENDCLASS.\nCLASS zcl_vim_di3_utils IMPLEMENTATION.\nMETHOD get_po_items_for_docid.\nENDMETHOD.\nENDCLASS.\n';
const BASE_SOURCE =
  'CLASS zcl_vim_di3_utils DEFINITION PUBLIC.\nENDCLASS.\nCLASS zcl_vim_di3_utils IMPLEMENTATION.\nENDCLASS.\n';

const headVersion: SourceVersionRef = {
  id: '00002',
  ordinal: 0,
  sourceUri: '/sap/bc/adt/repository/source/versions/00002/content',
  transports: [TRANSPORT],
};
const baseVersion: SourceVersionRef = {
  id: '00001',
  ordinal: 1,
  sourceUri: '/sap/bc/adt/repository/source/versions/00001/content',
  transports: ['S0DK958000'],
};

const workspaces: string[] = [];

afterEach(async () => {
  await Promise.all(
    workspaces
      .splice(0)
      .map((workspace) => rm(workspace, { recursive: true, force: true })),
  );
});

function classManifest(includeReferenceUri: boolean): TransportSourceManifest {
  const leaves = [
    { type: 'CLSD', wbtype: 'CLAS/OC', name: CLASS_NAME },
    { type: 'CPUB', wbtype: 'CLAS/OSU', name: CLASS_NAME },
    {
      type: 'METH',
      wbtype: 'CLAS/OM',
      name: `${CLASS_NAME.padEnd(30)}GET_PO_ITEMS_FOR_DOCID`,
    },
  ];
  const repositoryObject = {
    pgmid: 'R3TR',
    type: 'CLAS',
    name: CLASS_NAME,
    packageName: 'ZPACKAGE',
  };
  const inventory = leaves.map(({ type, wbtype, name }) => ({
    pgmid: 'LIMU',
    type,
    name,
    wbtype,
    ...(includeReferenceUri ? { uri: CLASS_URI } : {}),
    objFunc: '',
    sourceTransport: TRANSPORT,
  }));

  return {
    requestedTransports: [TRANSPORT],
    scopeTransports: [TRANSPORT],
    inventory,
    inventoryResolutions: inventory.map(
      ({ pgmid, type, name, sourceTransport }) => ({
        outcome: 'resolved' as const,
        object: { pgmid, type, name },
        sourceTransport,
        repositoryObject,
      }),
    ),
    entries: [
      {
        object: {
          pgmid: 'LIMU',
          type: 'CLSD',
          name: CLASS_NAME,
          packageName: 'ZPACKAGE',
        },
        repositoryObject,
        component: {
          id: 'main',
          sourceUri: `${CLASS_URI}/source/main`,
          versionsUri: `${CLASS_URI}/source/main/versions`,
        },
        sourceTransport: TRANSPORT,
        changeKind: 'modified',
        exact: true,
        base: baseVersion,
        head: headVersion,
      },
    ],
  };
}

describe('class transport materialization', () => {
  it.each([
    { ctsUriMode: 'with CTS URI', includeReferenceUri: true },
    { ctsUriMode: 'without CTS URI', includeReferenceUri: false },
  ])(
    'materializes a full abapGit class from three CTS subtype leaves $ctsUriMode and immutable ADT sources',
    async ({ includeReferenceUri }) => {
      const manifest = classManifest(includeReferenceUri);
      const workspace = await mkdtemp(join(tmpdir(), 'cts-class-fixture-'));
      workspaces.push(workspace);
      const service = createAdtFlowService({
        format: abapgitFormatPlugin,
        buildManifest: async () => manifest,
        readSource: async (selected) =>
          selected.id === headVersion.id ? HEAD_SOURCE : BASE_SOURCE,
        loadObject: async (identity) => ({
          object: {
            name: identity.name,
            dataSync: {
              name: identity.name,
              language: 'EN',
              include: [{ includeType: 'main' }],
            },
            getIncludeSource: async () => {
              throw new Error('mutable source read forbidden');
            },
          },
          packagePath: ['ZPACKAGE'],
        }),
      });
      const config = { format: { id: 'abapgit' } };

      await service.checkout({
        root: workspace,
        transports: [TRANSPORT],
        mode: 'base',
        verifyInventory: true,
        config,
      });
      expect(
        await readFile(
          join(workspace, 'src/zcl_vim_di3_utils.clas.abap'),
          'utf8',
        ),
      ).toBe(BASE_SOURCE);

      const result = await service.checkout({
        root: workspace,
        transports: [TRANSPORT],
        verifyInventory: true,
        config,
      });

      expect(
        await readFile(
          join(workspace, 'src/zcl_vim_di3_utils.clas.abap'),
          'utf8',
        ),
      ).toBe(HEAD_SOURCE);
      expect(
        await readFile(
          join(workspace, 'src/zcl_vim_di3_utils.clas.xml'),
          'utf8',
        ),
      ).toContain(CLASS_NAME);
      expect(result.skipped).toEqual([]);
      expect(result.inventory).toHaveLength(3);
      expect(result.inventoryResolutions).toHaveLength(3);
      expect(
        result.inventoryResolutions?.every(
          (resolution) =>
            resolution.outcome === 'resolved' &&
            resolution.repositoryObject.type === 'CLAS',
        ),
      ).toBe(true);
      expect(result.inventoryResolutions?.map(({ object }) => object)).toEqual(
        manifest.inventory.map(({ pgmid, type, name }) => ({
          pgmid,
          type,
          name,
        })),
      );
      const descriptor = JSON.parse(
        await readFile(join(workspace, '.adt/tr/S0DK958193.json'), 'utf8'),
      );
      expect(descriptor.inventory).toHaveLength(3);
      expect(descriptor.objects).toHaveLength(1);
      expect(descriptor.incomplete).toBeUndefined();
      execFileSync('git', ['init', '--quiet'], { cwd: workspace });
      execFileSync('git', ['add', 'src/'], { cwd: workspace });
      expect(
        execFileSync('git', ['show', ':src/zcl_vim_di3_utils.clas.abap'], {
          cwd: workspace,
          encoding: 'utf8',
        }),
      ).toBe(HEAD_SOURCE);
    },
  );
});
