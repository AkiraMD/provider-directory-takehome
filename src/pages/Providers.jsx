import {
  Box,
  Flex,
  useTheme,
  Text,
  Container,
  VStack,
  Skeleton,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import DirectoryHeader from "../components/providers/DirectoryHeader";
import ProviderView from "../components/providers/ProviderView";
import { fetchProviders } from "../api";

const Providers = () => {
  const [providersRemoteData, setProvidersRemoteData] = useState({
    data: [],
    loading: false,
    error: undefined,
  });
  const theme = useTheme();

  useEffect(async () => {
    fetchData();
  }, []);

  const fetchData = () => {
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

  console.log(providersRemoteData);
  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
    >
      <DirectoryHeader />
      <Flex px={16} my="19px" placeContent="center">
        <Container maxW="600px">
          {providersRemoteData.loading ? (
            <VStack spacing="6px">
              <Skeleton height="20px" w="600px" mb="20px" />
              {Array.from(Array(6)).map(() => (
                <Skeleton height="160px" w="600px" />
              ))}
            </VStack>
          ) : (
            <>
              <Text
                fontSize="14px"
                color={theme.colors.neutral[800]}
                display="flex"
              >
                <Text
                  fontWeight={500}
                  fontSize="14px"
                  color={theme.colors.neutral[900]}
                  mr="2px"
                >
                  {providersRemoteData.data.length}
                </Text>{" "}
                providers in Ontario
              </Text>
              <VStack spacing="6px" pt="20px">
                {providersRemoteData.data.map((provider) => (
                  <ProviderView
                    name={provider.name}
                    title={provider.title}
                    bio={provider.bio}
                    availability={provider.availabilty}
                    id={provider.id}
                  />
                ))}
              </VStack>
            </>
          )}
        </Container>
      </Flex>
    </Box>
  );
};

export default Providers;
