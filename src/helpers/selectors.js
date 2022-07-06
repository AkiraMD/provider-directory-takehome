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
