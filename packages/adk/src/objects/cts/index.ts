/**
 * CTS - Change and Transport System objects
 */

export * from './transport';
export { resolveClassComponentOwnerName } from './transport-object-owner';
export type { TransportObjectOwnerReference } from './transport-object-owner';

// New simplified transport for import operations
export {
  AdkTransport,
  AdkTransportObjectRef,
  AdkTransportTaskRef,
  MergedTransportView,
  matchesSelector,
  resolveTransportObjects,
  type TransportObjectSelector,
  type TransportResponse,
  type ResolvedTransportObjects,
} from './transport-import';
