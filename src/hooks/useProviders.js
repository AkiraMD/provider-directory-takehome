import { useState, useEffect } from 'react';
import { fetchProviders } from '../lib/api';

const useProviders = () => {
  const [state, setState] = useState({
    providers: [],
    loading: true,
    error: undefined,
  });

  useEffect(() => {
    fetchProviders()
      .then((result) => {
        setState((prev) => ({ ...prev, providers: result, loading: false }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: error, loading: false }));
      });
  }, []);

  return {
    providers: state.providers,
    loading: state.loading,
    error: state.error,
  };
};

export default useProviders;
