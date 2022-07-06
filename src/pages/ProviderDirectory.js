import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Error from '../components/UI/Error';
import useProviders from '../hooks/useProviders';
import { getProvidersByLocation } from '../helpers/selectors';
import { defaultLocation } from '../constants/locationConstants';
import './ProviderDirectory.scss';

const ProviderDirectory = () => {
  const { providers, location, setLocation, loading, error } =
    useProviders(defaultLocation);

  /* Filter list of of providers for the current location */
  const providersByLocation = getProvidersByLocation(providers, location);

  /* Loading */
  if (loading) {
    return <LoadingSpinner />;
  }

  /* Error */
  if (error) {
    return <Error message={error} />;
  }

  return (
    <main className="directory">
      <ProviderDirectoryHeader
        location={location}
        updateLocation={setLocation}
      />
      <ProviderList providers={providersByLocation} location={location} />
    </main>
  );
};

export default ProviderDirectory;
