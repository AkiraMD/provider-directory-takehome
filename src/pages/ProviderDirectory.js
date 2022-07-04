import { useState, useEffect } from 'react';
import ProviderDirectoryHeader from '../components/providers/ProviderDirectoryHeader';
import ProviderList from '../components/providers/ProviderList';
import { fetchProviders } from '../lib/api';

const ProviderDirectory = () => {
  const [providers, setProviders] = useState([]);
  const [location, setLocation] = useState('Ontario');

  useEffect(() => {
    fetchProviders().then((result) => setProviders(result));
  }, []);

  return (
    <>
      <ProviderDirectoryHeader />
      <ProviderList providers={providers} />
    </>
  );
};

export default ProviderDirectory;
