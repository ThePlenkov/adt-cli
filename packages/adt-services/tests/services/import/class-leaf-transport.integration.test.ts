import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { abapGitPlugin } from '@abapify/adt-plugin-abapgit';

const { mockTransportGet, mockPackageGet, mockPlugin } = vi.hoisted(() => ({
  mockTransportGet: vi.fn(),
  mockPackageGet: vi.fn(),
  mockPlugin: {
    name: 'abapGit',
    description: 'abapGit test plugin',
    instance: {
      name: 'abapGit',
      description: 'abapGit test plugin',
      registry: { isSupported: vi.fn() },
      format: { import: vi.fn(), delete: vi.fn() },
      hooks: {},
    },
  },
}));

vi.mock('@abapify/adk', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@abapify/adk')>();
  return {
    ...actual,
  };
});

vi.mock('../../../src/utils/format-loader', () => ({
  loadFormatPlugin: vi.fn(async () => mockPlugin),
  parseFormatSpec: vi.fn((spec: string) => ({
    package: spec,
    preset: undefined,
  })),
}));

vi.mock('../../../src/utils/destinations', () => ({
  getConfig: vi.fn(async () => ({ raw: {} })),
}));

describe('legacy ImportService class-component acquisition', () => {
  let outputPath: string;

  beforeEach(async () => {
    outputPath = await mkdtemp(join(tmpdir(), 'legacy-class-import-'));
    const adk = await import('@abapify/adk');
    vi.spyOn(adk.AdkPackage, 'get').mockImplementation(mockPackageGet);
    vi.spyOn(adk.AdkTransport, 'get').mockImplementation(mockTransportGet);
    mockPackageGet.mockReset().mockResolvedValue({ superPackage: undefined });
    mockPlugin.instance.registry.isSupported
      .mockReset()
      .mockImplementation((type: string) =>
        abapGitPlugin.registry.isSupported(type),
      );
    mockPlugin.instance.format.import
      .mockReset()
      .mockImplementation((object: unknown, target: string, context: unknown) =>
        abapGitPlugin.format.import(object as never, target, context as never),
      );
    mockPlugin.instance.format.delete
      .mockReset()
      .mockResolvedValue({ success: true, filesRemoved: [] });
  });

  afterEach(async () => {
    await rm(outputPath, { recursive: true, force: true });
    vi.restoreAllMocks();
  });

  it('materializes the S0DK958193 class owner from URI-less CLSD, CPUB, and fixed-width METH leaves', async () => {
    const { AdkTransportObjectRef } = await import('@abapify/adk');
    const className = 'ZCL_VIM_DI3_UTILS';
    const classSource =
      'CLASS zcl_vim_di3_utils DEFINITION PUBLIC.\nPUBLIC SECTION.\nMETHODS get_po_items_for_docid.\nENDCLASS.\nCLASS zcl_vim_di3_utils IMPLEMENTATION.\nMETHOD get_po_items_for_docid.\nENDMETHOD.\nENDCLASS.\n';
    const classModel = {
      kind: 'class',
      type: 'CLAS',
      name: className,
      package: 'ZPACKAGE',
      dataSync: {
        name: className,
        language: 'EN',
        include: [{ includeType: 'main' }],
      },
      getIncludeSource: vi.fn(async () => classSource),
    };
    const loadMocks: ReturnType<typeof vi.fn>[] = [];
    const objects = [
      { type: 'CLSD', wbtype: 'CLAS/OC', name: className },
      { type: 'CPUB', wbtype: 'CLAS/OSU', name: className },
      {
        type: 'METH',
        wbtype: 'CLAS/OM',
        name: `${className.padEnd(30)}GET_PO_ITEMS_FOR_DOCID`,
      },
    ].map((object) => {
      const reference = new AdkTransportObjectRef({} as never, {
        pgmid: 'LIMU',
        ...object,
        obj_func: '',
      });
      const loadMock = vi.fn(async () => classModel);
      loadMocks.push(loadMock);
      vi.spyOn(reference, 'load').mockImplementation(loadMock);
      return reference;
    });
    mockTransportGet.mockResolvedValue({
      number: 'S0DK958193',
      description: 'S0D class parent scope',
      objects,
    });

    const { ImportService } =
      await import('../../../src/services/import/service');
    const result = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
    });

    expect(result.results.success).toBe(3);
    expect(result.results.skipped).toBe(0);
    expect(mockPlugin.instance.registry.isSupported).toHaveBeenCalledWith(
      'CLAS',
    );
    expect(
      loadMocks.every((loadMock) => loadMock.mock.calls.length === 1),
    ).toBe(true);
    expect(
      await readFile(
        join(outputPath, 'src/zcl_vim_di3_utils.clas.abap'),
        'utf8',
      ),
    ).toBe(classSource);
    expect(
      await readFile(
        join(outputPath, 'src/zcl_vim_di3_utils.clas.xml'),
        'utf8',
      ),
    ).toContain('ZCL_VIM_DI3_UTILS');
  });
});
