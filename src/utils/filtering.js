/**
 * @template T
 * @param {{selectedFilter: string, items: T[], rules: {name: string, predicate?: (value: T) => boolean}[]}} param0
 * @returns
 */
export function filter({ selectedFilter, items, rules }) {
  for (const { name, predicate = () => true } of rules) {
    if (selectedFilter === name) return items.filter(predicate);
  }

  return [];
}

/**
 * @template T
 * @param {{sortBy: `${any}_${'asc' | 'desc'}`, items: T[]}} param0
 */
export function sort({ sortBy, items }) {
  const [sortField, sortDirection] = sortBy.split('-');
  const modifier = sortDirection === 'asc' ? 1 : -1;
  return items.sort((a, b) => (a[sortField] - b[sortField]) * modifier);
}
