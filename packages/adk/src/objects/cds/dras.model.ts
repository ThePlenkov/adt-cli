import { CdsAspect } from '../../base/kinds';
import { registerObjectType } from '../../base/registry';
import { AdkSourceOnlyCdsObject } from './source-only-object';

export class AdkCdsAspect extends AdkSourceOnlyCdsObject {
  static readonly kind = CdsAspect;
  readonly kind = AdkCdsAspect.kind;
  protected readonly endpoint = 'ddic/dras/sources';
}

registerObjectType('DRAS', CdsAspect, AdkCdsAspect, {
  endpoint: 'ddic/dras/sources',
});
