import { DynamicCache } from '../../base/kinds';
import { registerObjectType } from '../../base/registry';
import { AdkSourceOnlyCdsObject } from './source-only-object';

export class AdkDynamicCache extends AdkSourceOnlyCdsObject {
  static readonly kind = DynamicCache;
  readonly kind = AdkDynamicCache.kind;
  protected readonly endpoint = 'ddic/dtdc/sources';
}
registerObjectType('DTDC', DynamicCache, AdkDynamicCache, {
  endpoint: 'ddic/dtdc/sources',
});
