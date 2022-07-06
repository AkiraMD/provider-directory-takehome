import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useProviders from '../hooks/useProviders';
import { getProvidersByLocation } from '../helpers/selectors';
import { defaultLocation } from '../constants/locationConstants';
import './ProviderDirectory.scss';

const ProviderDirectory = () => {
  const { providers, location, setLocation, loading } =
    useProviders(defaultLocation);

  // Filter list of of providers for the current location
  const providersByLocation = getProvidersByLocation(providers, location);

  return (
    <main className="directory">
      <ProviderDirectoryHeader
        location={location}
        updateLocation={setLocation}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ProviderList providers={providersByLocation} location={location} />
      )}
    </main>
  );
};

export default ProviderDirectory;
