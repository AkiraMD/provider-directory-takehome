import { useState, useEffect } from "react";
import { fetchProvider } from "./api";

export const useProvider = (providerId) => {
  const [providerRemoteData, setProviderRemote] = useState({
    data: {},
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching!");
      setProviderRemote({
        ...providerRemoteData,
        loading: true,
      });
      fetchProvider(providerId)
        .then((data) => {
          setProviderRemote({
            ...providerRemoteData,
            data: data,
            loading: false,
          });
        })
        .catch((error) => {
          setProviderRemote({
            ...providerRemoteData,
            error: error,
            loading: false,
          });
        });
    };
    fetchData();
  }, []);
  return {
    data: providerRemoteData.data,
    loading: providerRemoteData.loading,
    error: providerRemoteData.error,
  };
};
