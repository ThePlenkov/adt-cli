import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { AdkPackage, AdkTransport, AdkTransportObjectRef } from '@abapify/adk';
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
    vi.spyOn(AdkPackage, 'get').mockImplementation(mockPackageGet);
    vi.spyOn(AdkTransport, 'get').mockImplementation(mockTransportGet);
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

  it('loads and serializes each class owner once while retaining all transport leaves', async () => {
    const className = 'ZCL_VIM_DI3_UTILS';
    const otherClassName = 'ZCL_OTHER';
    const classSource =
      'CLASS zcl_vim_di3_utils DEFINITION PUBLIC.\nPUBLIC SECTION.\nMETHODS get_po_items_for_docid.\nMETHODS set_po_items_for_docid.\nENDCLASS.\nCLASS zcl_vim_di3_utils IMPLEMENTATION.\nMETHOD get_po_items_for_docid.\nENDMETHOD.\nMETHOD set_po_items_for_docid.\nENDMETHOD.\nENDCLASS.\n';
    const otherClassSource =
      'CLASS zcl_other DEFINITION PUBLIC.\nENDCLASS.\nCLASS zcl_other IMPLEMENTATION.\nENDCLASS.\n';
    const sources = new Map([
      [className, classSource],
      [otherClassName, otherClassSource],
    ]);
    const classGet = vi.fn(async (name: string) => ({
      abapClass: {
        name,
        language: 'EN',
        include: [{ includeType: 'main' }],
      },
    }));
    const sourceGet = vi.fn(async (name: string) => sources.get(name) ?? '');
    const client = {
      adt: {
        oo: {
          classes: {
            get: classGet,
            source: { main: { get: sourceGet } },
          },
        },
      },
    };
    const objects = [
      { pgmid: 'R3TR', type: 'CLAS', wbtype: 'CLAS', name: className },
      { pgmid: 'LIMU', type: 'CLSD', wbtype: 'CLAS', name: className },
      { pgmid: 'LIMU', type: 'CPUB', wbtype: 'CLAS', name: className },
      {
        pgmid: 'LIMU',
        type: 'METH',
        wbtype: 'CLAS',
        name: `${className.padEnd(30)}GET_PO_ITEMS_FOR_DOCID`,
      },
      {
        pgmid: 'LIMU',
        type: 'METH',
        wbtype: 'CLAS',
        name: `${className.padEnd(30)}SET_PO_ITEMS_FOR_DOCID`,
      },
      { pgmid: 'LIMU', type: 'CLSD', wbtype: 'CLAS', name: otherClassName },
      {
        pgmid: 'LIMU',
        type: 'METH',
        wbtype: 'CLAS',
        name: `${otherClassName.padEnd(30)}READ_DATA`,
      },
    ].map(
      (object) =>
        new AdkTransportObjectRef({ client } as never, {
          ...object,
          obj_func: '',
        }),
    );
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

    expect(result.results.success).toBe(7);
    expect(result.results.skipped).toBe(0);
    expect(result.objectsByType).toEqual({
      CLAS: 1,
      CLSD: 2,
      CPUB: 1,
      METH: 3,
    });
    expect(mockPlugin.instance.registry.isSupported).toHaveBeenCalledWith(
      'CLAS',
    );
    expect(classGet).toHaveBeenCalledTimes(2);
    expect(classGet).toHaveBeenCalledWith(className);
    expect(classGet).toHaveBeenCalledWith(otherClassName);
    expect(sourceGet).toHaveBeenCalledTimes(2);
    expect(mockPlugin.instance.format.import).toHaveBeenCalledTimes(2);
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
    expect(
      await readFile(join(outputPath, 'src/zcl_other.clas.abap'), 'utf8'),
    ).toBe(otherClassSource);

    mockPlugin.instance.format.import.mockResolvedValueOnce({
      success: false,
      errors: ['serializer failure'],
    });
    const failedResult = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
    });

    expect(failedResult.results.failed).toBe(5);
    expect(failedResult.results.success).toBe(2);
    expect(failedResult.objectsByType).toEqual({ CLSD: 1, METH: 1 });
    expect(classGet).toHaveBeenCalledTimes(4);
    expect(mockPlugin.instance.format.import).toHaveBeenCalledTimes(4);

    const classFilteredResult = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
      objectTypes: ['CLAS'],
    });
    expect(classFilteredResult.results.success).toBe(7);
    expect(classFilteredResult.objectsByType).toEqual({
      CLAS: 1,
      CLSD: 2,
      CPUB: 1,
      METH: 3,
    });
    expect(classGet).toHaveBeenCalledTimes(6);
  });

  it('imports a URI-less CINC leaf with equals-padded owner identity through its CLAS owner', async () => {
    const className = 'ZCL_VIM_DI3_WF_BO';
    const classSource =
      'CLASS zcl_vim_di3_wf_bo DEFINITION PUBLIC.\nENDCLASS.\nCLASS zcl_vim_di3_wf_bo IMPLEMENTATION.\nENDCLASS.\n';
    const implementationsSource =
      'CLASS lcl_ccimp_helper IMPLEMENTATION.\nMETHOD build.\nENDMETHOD.\nENDCLASS.\n';
    const changedAt = new Date('2025-11-09T17:21:38Z');
    const mainInclude = {
      includeType: 'main',
      sourceUri: 'source/main',
      name: '',
      type: 'CLAS/I',
      version: 'active',
      changedAt,
      createdAt: new Date('2025-11-09T00:00:00Z'),
      changedBy: 'TESTUSER',
      createdBy: 'TESTUSER',
    };
    const implementationsInclude = {
      includeType: 'implementations',
      sourceUri: 'includes/implementations',
      name: '',
      type: 'CLAS/I',
      version: 'active',
      changedAt,
      createdAt: new Date('2025-11-09T00:00:00Z'),
      changedBy: 'TESTUSER',
      createdBy: 'TESTUSER',
    };
    const classGet = vi.fn(async (name: string) => ({
      abapClass: {
        name,
        language: 'EN',
        include: [mainInclude, implementationsInclude],
      },
    }));
    const mainSourceGet = vi.fn(async () => classSource);
    const implementationsGet = vi.fn(async () => implementationsSource);
    const client = {
      adt: {
        oo: {
          classes: {
            get: classGet,
            source: { main: { get: mainSourceGet } },
            includes: { get: implementationsGet },
          },
        },
      },
    };
    const object = new AdkTransportObjectRef({ client } as never, {
      pgmid: 'LIMU',
      type: 'CINC',
      wbtype: 'CLAS/OCN',
      name: 'ZCL_VIM_DI3_WF_BO=============CCIMP',
      obj_func: '',
    });
    mockTransportGet.mockResolvedValue({
      number: 'S0DK958193',
      description: 'S0D class parent scope',
      objects: [object],
    });

    const { ImportService } =
      await import('../../../src/services/import/service');
    const result = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
    });

    expect(result.results).toEqual({
      success: 1,
      skipped: 0,
      failed: 0,
      deleted: 0,
    });
    expect(result.objectsByType).toEqual({ CINC: 1 });
    expect(classGet).toHaveBeenCalledTimes(1);
    expect(classGet).toHaveBeenCalledWith(className);
    expect(mainSourceGet).toHaveBeenCalledTimes(1);
    expect(mainSourceGet).toHaveBeenCalledWith(className);
    expect(implementationsGet).toHaveBeenCalledTimes(1);
    expect(implementationsGet).toHaveBeenCalledWith(
      className,
      'implementations',
    );
    expect(mockPlugin.instance.format.import).toHaveBeenCalledTimes(1);
    expect(
      await readFile(
        join(outputPath, 'src/zcl_vim_di3_wf_bo.clas.abap'),
        'utf8',
      ),
    ).toBe(classSource);
    expect(
      await readFile(
        join(outputPath, 'src/zcl_vim_di3_wf_bo.clas.locals_imp.abap'),
        'utf8',
      ),
    ).toBe(implementationsSource);
  });

  it('reports transient CLAS read failures for explicit owners and CPRI/CINC leaves', async () => {
    const className = 'ZCL_MISSING';
    const classGet = vi.fn(async () => {
      throw Object.assign(new Error('HTTP 503: Service Unavailable'), {
        status: 503,
      });
    });
    const client = {
      adt: { oo: { classes: { get: classGet } } },
    };
    const objects = [
      { pgmid: 'R3TR', type: 'CLAS', wbtype: 'CLAS', name: className },
      { pgmid: 'LIMU', type: 'CPRI', wbtype: 'CLAS/OSI', name: className },
      {
        pgmid: 'LIMU',
        type: 'CINC',
        wbtype: 'CLAS/OCN',
        name: `${className.padEnd(30)}CCIMP`,
      },
      { pgmid: 'LIMU', type: 'CLSD', wbtype: 'CLAS/OC', name: className },
      {
        pgmid: 'LIMU',
        type: 'METH',
        wbtype: 'CLAS/OM',
        name: `${className.padEnd(30)}MISSING_METHOD`,
      },
    ].map(
      (object) =>
        new AdkTransportObjectRef({ client } as never, {
          pgmid: 'LIMU',
          obj_func: '',
          ...object,
        }),
    );
    mockTransportGet.mockResolvedValue({
      number: 'S0DK958193',
      description: 'S0D class parent scope',
      objects,
    });

    const staleClassFile = join(outputPath, 'src/zcl_missing.clas.abap');
    const staleIncludeFile = join(
      outputPath,
      'src/zcl_missing.clas.locals_imp.abap',
    );
    await mkdir(join(outputPath, 'src'), { recursive: true });
    await writeFile(staleClassFile, 'stale source');
    await writeFile(staleIncludeFile, 'stale include');

    const { ImportService } =
      await import('../../../src/services/import/service');
    const result = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
      removeMissingObjects: true,
    });

    expect(classGet).toHaveBeenCalledTimes(1);
    expect(mockPlugin.instance.format.delete).not.toHaveBeenCalled();
    expect(mockPlugin.instance.format.import).not.toHaveBeenCalled();
    expect(result.results).toEqual({
      success: 0,
      skipped: 0,
      failed: 5,
      deleted: 0,
    });
    expect(result.filesRemoved).toBeUndefined();
    expect(await readFile(staleClassFile, 'utf8')).toBe('stale source');
    expect(await readFile(staleIncludeFile, 'utf8')).toBe('stale include');
  });

  it.each([
    { label: 'direct leaves only', includeOwner: false, wrapped: false },
    { label: 'direct explicit owner', includeOwner: true, wrapped: false },
    { label: 'wrapped leaves only', includeOwner: false, wrapped: true },
  ])(
    'deletes canonical class files once for $label after metadata 404',
    async ({ includeOwner, wrapped }) => {
      const className = 'ZCL_NOT_FOUND';
      const classGet = vi.fn(async () => {
        throw Object.assign(
          new Error('HTTP 404: Not Found'),
          wrapped ? { response: { status: 404 } } : { status: 404 },
        );
      });
      const client = { adt: { oo: { classes: { get: classGet } } } };
      const objects = [
        ...(includeOwner
          ? [{ pgmid: 'R3TR', type: 'CLAS', wbtype: 'CLAS', name: className }]
          : []),
        { pgmid: 'LIMU', type: 'CPRI', wbtype: 'CLAS/OSI', name: className },
        {
          pgmid: 'LIMU',
          type: 'CINC',
          wbtype: 'CLAS/OCN',
          name: `${className.padEnd(30, '=')}CCIMP`,
        },
      ].map(
        (object) =>
          new AdkTransportObjectRef({ client } as never, {
            obj_func: '',
            ...object,
          }),
      );
      mockTransportGet.mockResolvedValue({
        number: 'S0DK958193',
        description: 'S0D class parent scope',
        objects,
      });
      const classFile = join(outputPath, 'src/zcl_not_found.clas.abap');
      const includeFile = join(
        outputPath,
        'src/zcl_not_found.clas.locals_imp.abap',
      );
      const unrelated = join(outputPath, 'src/zcl_other.clas.abap');
      await mkdir(join(outputPath, 'src'), { recursive: true });
      await writeFile(classFile, 'stale class');
      await writeFile(includeFile, 'stale include');
      await writeFile(unrelated, 'unrelated class');
      mockPlugin.instance.format.delete.mockImplementation(
        (object: unknown, target: string, context: unknown) =>
          abapGitPlugin.format.delete(
            object as never,
            target,
            context as never,
          ),
      );
      const { ImportService } =
        await import('../../../src/services/import/service');
      const result = await new ImportService().importTransport({
        transportNumber: 'S0DK958193',
        outputPath,
        format: 'abapgit',
        removeMissingObjects: true,
      });
      expect(classGet).toHaveBeenCalledTimes(1);
      expect(mockPlugin.instance.format.delete).toHaveBeenCalledTimes(1);
      expect(mockPlugin.instance.format.delete).toHaveBeenCalledWith(
        { pgmid: 'R3TR', type: 'CLAS', name: className },
        outputPath,
        expect.any(Object),
      );
      expect(mockPlugin.instance.format.import).not.toHaveBeenCalled();
      expect(result.results).toEqual({
        success: 0,
        skipped: 0,
        failed: 0,
        deleted: objects.length,
      });
      expect(result.filesRemoved?.sort()).toEqual([
        'src/zcl_not_found.clas.abap',
        'src/zcl_not_found.clas.locals_imp.abap',
      ]);
      await expect(readFile(classFile, 'utf8')).rejects.toMatchObject({
        code: 'ENOENT',
      });
      await expect(readFile(includeFile, 'utf8')).rejects.toMatchObject({
        code: 'ENOENT',
      });
      expect(await readFile(unrelated, 'utf8')).toBe('unrelated class');
    },
  );

  it('continues canonical cleanup across owners when delete throws or rejects', async () => {
    const className = 'ZCL_DELETE_ERRORS';
    const classGet = vi.fn(async () => {
      throw Object.assign(new Error('HTTP 404: Not Found'), {
        status: 404,
      });
    });
    const client = {
      adt: { oo: { classes: { get: classGet } } },
    };
    const objects = [
      { type: 'CLSD', name: `${className}_A` },
      { type: 'METH', name: `${`${className}_B`.padEnd(30)}MISSING_METHOD` },
    ].map(
      (object) =>
        new AdkTransportObjectRef({ client } as never, {
          pgmid: 'LIMU',
          wbtype: 'CLAS',
          obj_func: '',
          ...object,
        }),
    );
    mockTransportGet.mockResolvedValue({
      number: 'S0DK958193',
      description: 'S0D class parent scope',
      objects,
    });
    mockPlugin.instance.format.delete
      .mockImplementationOnce(() => {
        throw new Error('synchronous delete failure');
      })
      .mockImplementationOnce(() =>
        Promise.reject(new Error('asynchronous delete failure')),
      );

    const { ImportService } =
      await import('../../../src/services/import/service');
    const result = await new ImportService().importTransport({
      transportNumber: 'S0DK958193',
      outputPath,
      format: 'abapgit',
      removeMissingObjects: true,
    });

    expect(classGet).toHaveBeenCalledTimes(2);
    expect(mockPlugin.instance.format.delete).toHaveBeenCalledTimes(2);
    expect(
      mockPlugin.instance.format.delete.mock.calls.map(([object]) => object),
    ).toEqual(
      expect.arrayContaining([
        { pgmid: 'R3TR', type: 'CLAS', name: `${className}_A` },
        { pgmid: 'R3TR', type: 'CLAS', name: `${className}_B` },
      ]),
    );
    expect(result.results).toEqual({
      success: 0,
      skipped: 2,
      failed: 0,
      deleted: 0,
    });
  });
});
