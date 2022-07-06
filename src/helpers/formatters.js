/**
 * Format location options for dropdown list
 * @param {[{}]} locations An array of available locations.
 * @return {[]} An array of locations formatted for dropdown use.
 */
export function getLocationOptions(locations) {
  return locations.map((location) => ({
    value: location.name,
    label: location.abbrev,
  }));
}
