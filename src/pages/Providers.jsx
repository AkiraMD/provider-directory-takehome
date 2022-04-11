import {
  Box,
  Flex,
  useTheme,
  Text,
  Container,
  VStack,
  Skeleton,
} from "@chakra-ui/react";

import React from "react";
import DirectoryHeader from "../components/providers/DirectoryHeader";
import ProviderView from "../components/providers/ProviderView";
import { useProviders } from "../hooks";
import ErrorPage from "./ErrorPage";

const Providers = () => {
  const { data, loading, error } = useProviders();
  const theme = useTheme();

  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
    >
      <DirectoryHeader />
      <Flex px={{ base: 0, sm: 0, md: 16 }} my="19px" placeContent="center">
        <Container maxW="600px">
          {loading ? (
            <VStack spacing="6px">
              <Skeleton height="20px" w="600px" mb="20px" />
              {Array.from(Array(6)).map((i, idx) => (
                <Skeleton key={`${idx}-${i}`} height="160px" w="600px" />
              ))}
            </VStack>
          ) : error ? (
            <ErrorPage error={error} />
          ) : (
            <>
              <Text
                fontSize="14px"
                color={theme.colors.neutral[800]}
                display="flex"
              >
                <Text
                  as="span"
                  fontWeight={500}
                  fontSize="14px"
                  color={theme.colors.neutral[900]}
                  mr="2px"
                >
                  {data.length}
                </Text>{" "}
                providers in Ontario
              </Text>
              <VStack spacing="6px" pt="20px">
                {data.map((provider) => (
                  <ProviderView
                    key={provider.id}
                    name={provider.name}
                    title={provider.title}
                    bio={provider.bio}
                    availability={provider.availabilty}
                    id={provider.id}
                    image={provider.avatarUrl}
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
