import { useState, useEffect } from 'react';
import { fetchProvider } from '../lib/api';

const useProvider = (providerId) => {
  const [provider, setProvider] = useState({
    data: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    fetchProvider(providerId)
      .then((result) => {
        setProvider((prev) => ({ ...prev, data: result, loading: false }));
      })
      .catch((error) => {
        setProvider((prev) => ({ ...prev, error: error, loading: false }));
      });
  }, [providerId]);

  return {
    provider: provider.data,
    loading: provider.loading,
    error: provider.error,
  };
};

export default useProvider;
