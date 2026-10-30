export interface TransportObjectOwnerReference {
  pgmid?: string;
  type?: string;
  wbtype?: string;
  name?: string;
  uri?: string;
}

const CLASS_COMPONENT_WBTYPES: Record<string, string> = {
  CLSD: 'CLAS/OC',
  CPUB: 'CLAS/OSU',
  METH: 'CLAS/OM',
};

function classNameFromUri(uri: string | undefined): string | undefined {
  if (!uri) return undefined;
  const path = uri.split(/[?#]/, 1)[0];
  const encodedName = path.match(/\/oo\/classes\/([^/]+)/i)?.[1];
  if (!encodedName) return undefined;

  try {
    return decodeURIComponent(encodedName).trim().toUpperCase() || undefined;
  } catch {
    return undefined;
  }
}

/** Resolve a LIMU class component to the complete CLAS repository owner. */
export function resolveClassComponentOwnerName(
  reference: TransportObjectOwnerReference,
): string | undefined {
  if (reference.pgmid?.trim().toUpperCase() !== 'LIMU') return undefined;

  const type = reference.type?.trim().toUpperCase() ?? '';
  const expectedWbtype = CLASS_COMPONENT_WBTYPES[type];
  if (!expectedWbtype) return undefined;

  const wbtype = reference.wbtype?.trim().toUpperCase();
  if (wbtype && wbtype !== expectedWbtype) return undefined;

  const uriOwner = classNameFromUri(reference.uri);
  if (uriOwner) return uriOwner;

  const rawName = reference.name ?? '';
  const ownerName = type === 'METH' ? rawName.slice(0, 30) : rawName;
  return ownerName.trim().toUpperCase() || undefined;
}
