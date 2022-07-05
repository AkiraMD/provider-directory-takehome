import { useState, useEffect } from 'react';
import { fetchProviders } from '../lib/api';

const useProviders = () => {
  const [providers, setProviders] = useState({
    data: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    fetchProviders()
      .then((result) => {
        setProviders((prev) => ({ ...prev, data: result, loading: false }));
      })
      .catch((error) => {
        setProviders((prev) => ({ ...prev, error: error, loading: false }));
      });
  }, []);

  return {
    providers: providers.data,
    loading: providers.loading,
    error: providers.error,
  };
};

export default useProviders;
