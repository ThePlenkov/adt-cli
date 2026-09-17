import { ScalarFunctionDefinition } from '../../base/kinds';
import { registerObjectType } from '../../base/registry';
import { AdkCdsSourceObject, type AdkCdsSourceContract } from './source-object';

export class AdkScalarFunctionDefinition extends AdkCdsSourceObject {
  static readonly kind = ScalarFunctionDefinition;
  readonly kind = AdkScalarFunctionDefinition.kind;
  protected readonly endpoint = 'ddic/dsfd/sources';
  protected get contract(): AdkCdsSourceContract {
    return this.ctx.client.adt.ddic.dsfd.sources as AdkCdsSourceContract;
  }
}

registerObjectType(
  'DSFD',
  ScalarFunctionDefinition,
  AdkScalarFunctionDefinition,
  {
    endpoint: 'ddic/dsfd/sources',
  },
);
