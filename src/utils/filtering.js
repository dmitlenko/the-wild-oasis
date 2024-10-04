/**
 * @template T
 * @param {{
 *  selectedFilter?: string,
 *  defaultFilter: string,
 *  items: T[],
 *  rules: {
 *    name: string,
 *    predicate?: (value: T) => boolean}[]
 *  }} param0
 * @returns
 */
export function filter({ selectedFilter, defaultFilter, items, rules }) {
  const filterName = selectedFilter || defaultFilter;

  for (const { name, predicate = () => true } of rules) {
    if (filterName === name) return items.filter(predicate);
  }

  return [];
}

/**
 * @template T
 * @param {{
 *  sortBy?: `${keyof T}_${'asc' | 'desc'}`,
 *  sortByDefault: `${keyof T}_${'asc' | 'desc'}`,
 *  items: T[]
 * }} param0
 */
export function sort({ sortBy, sortByDefault, items }) {
  const sortString = sortBy || sortByDefault;
  const [field, direction] = sortString.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  return items.sort((a, b) => (a[field] - b[field]) * modifier);
}
