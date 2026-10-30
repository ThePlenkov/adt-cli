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

interface ClassComponentType {
  type: string;
  wbtype: string;
}

function normalizeReferenceValue(
  value: string | undefined,
): string | undefined {
  return value?.trim().toUpperCase() || undefined;
}

function getClassComponentType(
  reference: TransportObjectOwnerReference,
): ClassComponentType | undefined {
  if (normalizeReferenceValue(reference.pgmid) !== 'LIMU') return undefined;

  const type = normalizeReferenceValue(reference.type);
  if (!type) return undefined;

  const wbtype = CLASS_COMPONENT_WBTYPES[type];
  return wbtype ? { type, wbtype } : undefined;
}

function hasMatchingWorkbenchType(
  actualWbtype: string | undefined,
  expectedWbtype: string,
): boolean {
  const normalizedWbtype = normalizeReferenceValue(actualWbtype);
  return (
    normalizedWbtype === undefined ||
    normalizedWbtype === 'CLAS' ||
    normalizedWbtype === expectedWbtype
  );
}

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

function classNameFromTransportName(
  name: string | undefined,
  type: string,
): string | undefined {
  const ownerField = type === 'METH' ? name?.slice(0, 30) : name;
  return normalizeReferenceValue(ownerField);
}

/** Resolve a LIMU class component to the complete CLAS repository owner. */
export function resolveClassComponentOwnerName(
  reference: TransportObjectOwnerReference,
): string | undefined {
  const component = getClassComponentType(reference);
  if (
    !component ||
    !hasMatchingWorkbenchType(reference.wbtype, component.wbtype)
  ) {
    return undefined;
  }

  return (
    classNameFromUri(reference.uri) ??
    classNameFromTransportName(reference.name, component.type)
  );
}
