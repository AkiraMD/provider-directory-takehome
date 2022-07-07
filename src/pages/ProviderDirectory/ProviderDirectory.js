import ProviderDirectoryHeader from '../../components/Providers/ProviderDirectoryHeader/ProviderDirectoryHeader';
import ProviderList from '../../components/Providers/ProviderList/ProviderList';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import Error from '../../components/UI/Error/Error';
import useProviders from '../../hooks/useProviders';
import { getProvidersByLocation } from '../../helpers/selectors';
import { defaultLocation } from '../../constants/defaults';
import './ProviderDirectory.scss';

const ProviderDirectory = () => {
  const { providers, location, setLocation, loading, error } =
    useProviders(defaultLocation);

  /* Filter list of of providers for the current location */
  const providersByLocation = getProvidersByLocation(providers, location);

  /* Loading State */
  if (loading) {
    return <LoadingSpinner />;
  }

  /* Error State */
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
