import { useState } from 'react';
import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useProviders from '../hooks/useProviders';
import { getProvidersByLocation } from '../helpers/selectors';
import './ProviderDirectory.scss';

const ProviderDirectory = () => {
  const { providers, loading } = useProviders();
  const [selectedLocation, setSelectedLocation] = useState('Ontario');

  // Filter list of of providers for the current location
  const providersByLocation = getProvidersByLocation(providers, selectedLocation);

  return (
    <main className="directory">
      <ProviderDirectoryHeader
        location={selectedLocation}
        setLocation={setSelectedLocation}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ProviderList
          providers={providersByLocation}
          location={selectedLocation}
        />
      )}
    </main>
  );
};

export default ProviderDirectory;
