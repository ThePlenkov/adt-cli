import { CdsType } from '../../base/kinds';
import { registerObjectType } from '../../base/registry';
import { AdkSourceOnlyCdsObject } from './source-only-object';

export class AdkCdsType extends AdkSourceOnlyCdsObject {
  static readonly kind = CdsType;
  readonly kind = AdkCdsType.kind;
  protected readonly endpoint = 'ddic/drty/sources';
}

registerObjectType('DRTY', CdsType, AdkCdsType, {
  endpoint: 'ddic/drty/sources',
});
