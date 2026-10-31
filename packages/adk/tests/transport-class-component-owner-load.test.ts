import { beforeEach, describe, expect, it, vi } from 'vitest';

const factoryGet = vi.hoisted(() => vi.fn());

vi.mock('../src/factory', () => ({
  createAdk: vi.fn(() => ({ get: factoryGet })),
}));

vi.mock('../src/base/global-context', () => ({
  getGlobalContext: vi.fn(),
}));

import { AdkTransportObjectRef } from '../src/objects/cts/transport-import';

describe('AdkTransportObjectRef class-component loading', () => {
  beforeEach(() => {
    factoryGet.mockReset();
    factoryGet.mockReturnValue({ load: vi.fn(async () => undefined) });
  });

  it.each([
    {
      type: 'CPRI',
      wbtype: 'CLAS/OSI',
      name: 'ZCL_VIM_DI3_UTILS',
      owner: 'ZCL_VIM_DI3_UTILS',
    },
    {
      type: 'CINC',
      wbtype: 'CLAS/OCN',
      name: `${'ZCL_VIM_DI3_UTILS'.padEnd(30)}CCIMP`,
      owner: 'ZCL_VIM_DI3_UTILS',
    },
    {
      type: 'CINC',
      wbtype: 'CLAS/OCN',
      name: 'ZCL_VIM_DI3_WF_BO=============CCIMP',
      owner: 'ZCL_VIM_DI3_WF_BO',
    },
    {
      type: 'CINC',
      wbtype: 'CLAS/OCN',
      name: `${'Z'.repeat(30)}CCIMP`,
      owner: 'Z'.repeat(30),
    },
  ])(
    'loads URI-less $type/$wbtype through the canonical CLAS owner',
    async ({ type, wbtype, name, owner }) => {
      const object = new AdkTransportObjectRef({} as any, {
        pgmid: 'LIMU',
        type,
        wbtype,
        name,
      });

      await object.load();

      expect(factoryGet).toHaveBeenCalledWith(owner, 'CLAS');
      expect(factoryGet.mock.results[0]?.value.load).toHaveBeenCalledTimes(1);
    },
  );
});
