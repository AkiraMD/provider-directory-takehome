import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useTheme,
  Text,
  Tag,
  TagLabel,
  Grid,
  Container,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import React, { useState, useEffect } from "react";
import DirectoryHeader from "../components/DirectoryHeader";
import ProviderView from "../components/ProviderView";
import { fetchProviders } from "../api";

const Providers = () => {
  const [loading, setLoading] = useState(false);
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState();
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  useEffect(async () => {
    console.log("use effect");
    // setDataState("pending");
    // fetchProviders()
    //   .then((val) => {
    //     // console.log(val);
    //     //   setDataState("done");
    //     setProviders(val);
    //   })
    //   .finally(() => {
    //     setDataState("done");
    //   });
    // const response = await fetchProviders();
    // setProviders(response);
    fetchData();
  }, [providers.length]);

  const fetchData = () => {
    setLoading(true);
    fetchProviders()
      .then((data) => {
        setProviders(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setTodo(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
  };

  console.log(providers);
  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
    >
      <DirectoryHeader />
      <Flex px={16} my="19px" placeContent="center">
        <Container maxW="600px">
          {loading ? (
            <VStack spacing="6px">
              <Skeleton height="20px" w="600px" mb="20px" />
              <Skeleton height="160px" w="600px" />
              <Skeleton height="160px" w="600px" />
              <Skeleton height="160px" w="600px" />
              <Skeleton height="160px" w="600px" />
              <Skeleton height="160px" w="600px" />
              <Skeleton height="160px" w="600px" />
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
                  17
                </Text>{" "}
                providers in Ontario
              </Text>
              <VStack spacing="6px" pt="20px">
                {providers.map((provider) => (
                  <ProviderView />
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
