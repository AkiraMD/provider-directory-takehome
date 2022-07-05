import { useState, useEffect } from 'react';
import { fetchProvider } from '../lib/api';

const useProvider = (providerId) => {
  const [state, setState] = useState({
    provider: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    fetchProvider(providerId)
      .then((result) => {
        setState((prev) => ({ ...prev, provider: result, loading: false }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: error, loading: false }));
      });
  }, [providerId]);

  return {
    provider: state.provider,
    loading: state.loading,
    error: state.error,
  };
};

export default useProvider;
