import { useState } from 'react';
import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useProviders from '../hooks/useProviders';
import './ProviderDirectory.scss';

const ProviderDirectory = () => {
  const { providers, loading } = useProviders();
  const [location, setLocation] = useState('Ontario');

  return (
    <>
      <ProviderDirectoryHeader />
      {loading ? <LoadingSpinner /> : <ProviderList providers={providers} />}
    </>
  );
};

export default ProviderDirectory;
