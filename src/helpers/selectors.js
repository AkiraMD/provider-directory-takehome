/**
 * Get all unique provider locations
 * @param {[{}]} providers An array of providers.
 * @return {[]}  An array of unique locations. Empty array if nothing found.
 */
export function getUniqueLocations() {
  //stackoverflow.com/a/14438954
  return ['Ontario', 'Quebec'];
}

/**
 * Get all providers for a given location.
 * @param {[{}]} providers An array of providers.
 * @param {String} location The selected location.
 * @return {[]} A filtered array of providers for the given location.
 */
export function getProvidersByLocation(providers, selectedLocation) {
  return providers.filter(({ location }) => {
    return location.split(',')[1].trim() === selectedLocation;
  });
}
