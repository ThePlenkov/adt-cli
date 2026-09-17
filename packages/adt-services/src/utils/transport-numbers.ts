/**
 * Parse a comma-separated string of SAP transport numbers into a deduplicated
 * uppercase array.
 *
 * Trims whitespace, uppercases, filters empty tokens, and removes duplicates
 * while preserving insertion order (O(n) via Set).
 *
 * Throws when no valid transport numbers are found.
 *
 * @example
 * parseTransportNumbers('DEVK900001')                    // → ['DEVK900001']
 * parseTransportNumbers('DEVK900001, DEVK900002')        // → ['DEVK900001', 'DEVK900002']
 * parseTransportNumbers('DEVK900001,DEVK900001')         // → ['DEVK900001']  (deduped)
 */
export function parseTransportNumbers(value: string): string[] {
  const seen = new Set<string>();
  const numbers = value
    .split(',')
    .map((n) => n.trim().toUpperCase())
    .filter(Boolean)
    .filter((n) => {
      if (seen.has(n)) return false;
      seen.add(n);
      return true;
    });

  if (numbers.length === 0) {
    throw new Error(`No transport number(s) provided in '${value}'`);
  }

  return numbers;
}
