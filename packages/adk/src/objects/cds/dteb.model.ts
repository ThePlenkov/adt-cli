import { EntityBuffer } from '../../base/kinds';
import { registerObjectType } from '../../base/registry';
import { AdkCdsSourceObject, type AdkCdsSourceContract } from './source-object';

export class AdkEntityBuffer extends AdkCdsSourceObject {
  static readonly kind = EntityBuffer;
  readonly kind = AdkEntityBuffer.kind;
  protected readonly endpoint = 'ddic/dteb/sources';
  protected get contract(): AdkCdsSourceContract {
    return this.ctx.client.adt.ddic.dteb.sources as AdkCdsSourceContract;
  }
}

registerObjectType('DTEB', EntityBuffer, AdkEntityBuffer, {
  endpoint: 'ddic/dteb/sources',
});
