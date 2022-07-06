/**
 * Format location options for dropdown list
 * @param {[{}]} locations An array of available locations.
 * @return {[]} An array of locations formatted for dropdown use.
 */
export function formatLocationsForDropdown(locations) {
  return locations.map((location) => ({
    value: location.name,
    label: location.abbrev,
  }));
}

/**
 * Format and pluralize providers text
 * @param {Number} amountOfProviders Number of providers.
 * @param {String} location A selected location.
 * @return {String} Formatted string with correct pluralization.
 */
export function pluralizeProviders(amountOfProviders, location) {
  if (amountOfProviders === 1) {
    return `provider in ${location}`;
  }

  return `providers in ${location}`;
}

/**
 * Format list of languages
 * @param {[{}]} languages An array of languages
 * @return {String} Formatted string with correct punctuation for multiple languages
 */
export function formatLanguages(languages) {
  return languages && languages.length > 1 ? languages.join(', ') : languages;
}
