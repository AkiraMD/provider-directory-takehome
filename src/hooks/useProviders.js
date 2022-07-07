import { useState, useEffect } from 'react';
import { fetchProviders } from '../helpers/api';

const useProviders = (location) => {
  const [state, setState] = useState({
    providers: [],
    location: location,
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

  const setLocation = (location) => {
    setState((prev) => ({ ...prev, location }));
  };

  return {
    providers: state.providers,
    location: state.location,
    loading: state.loading,
    error: state.error,
    setLocation,
  };
};

export default useProviders;
