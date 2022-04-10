import { useState, useEffect } from "react";
import { fetchProvider, fetchProviders } from "./api";

export const useProviders = () => {
  const [providersRemoteData, setProvidersRemoteData] = useState({
    data: [],
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      setProvidersRemoteData({
        ...providersRemoteData,
        loading: true,
      });
      fetchProviders()
        .then((data) => {
          setProvidersRemoteData({
            ...providersRemoteData,
            data: data,
            loading: false,
          });
        })
        .catch((error) => {
          setProvidersRemoteData({
            ...providersRemoteData,
            error: error,
            loading: false,
          });
        });
    };
    fetchData();
  }, []);
  return {
    data: providersRemoteData.data,
    loading: providersRemoteData.loading,
    error: providersRemoteData.error,
  };
};

export const useProvider = (providerId) => {
  const [providerRemoteData, setProviderRemote] = useState({
    data: {},
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
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
