import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Text,
  useTheme,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../api";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Map } from "../components/shared/icons/Map";
import ProviderBio from "../components/provider-profile/ProviderBio";
import Listing from "../components/provider-profile/Listing";
import { Education } from "../components/shared/icons/Education";
import { Global } from "../components/shared/icons/Global";

const ProviderProfile = () => {
  const [providerRemoteData, setProviderRemote] = useState({
    data: {},
    loading: false,
    error: undefined,
  });
  const { providerId } = useParams();
  const theme = useTheme();
  const toast = useToast();

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
  console.log(providerRemoteData);

  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
      py="24px"
    >
      <Container maxW="800px">
        <Flex>
          <Text
            fontSize="12px"
            color={theme.colors.neutral[700]}
            fontWeight={400}
          >
            Mental Wellness
          </Text>
          <Text fontSize="12px" mx="6px">
            <ChevronRightIcon color={theme.colors.neutral[500]} />
          </Text>
          <Text
            fontSize="12px"
            color={theme.colors.neutral[800]}
            fontWeight={400}
          >
            Dr. Justina Choi, MSW
          </Text>
        </Flex>
        <Flex mt="24px">
          <Box flex="1">
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              border={`1px solid ${theme.colors.neutral[300]}`}
            />
          </Box>
          <Box flex="2" ml="20px">
            <Box bgColor={theme.colors.neutral[0]}>
              <ProviderBio />
              <Divider />
              <Box px="32px" py="24px">
                <VStack spacing="16px" mb="16px" alignItems="flex-start">
                  <Listing
                    icon={<Map />}
                    header="Location"
                    content="Toronto, Ontario"
                  />
                  <Listing
                    icon={<Education />}
                    header="Education"
                    content="University of Toronto"
                  />
                  <Listing
                    icon={<Global />}
                    header="Language"
                    content="English, French"
                  />
                </VStack>
                <Button
                  w="full"
                  bgColor={theme.colors.primary[500]}
                  _hover={{
                    bgColor: theme.colors.primary[600],
                  }}
                  color={theme.colors.neutral[0]}
                  borderRadius="2000px"
                  _focus={{
                    boxShadow: "none",
                    bgColor: theme.colors.primary[600],
                  }}
                  _active={{
                    bgColor: theme.colors.primary[600],
                  }}
                  onClick={() =>
                    toast({
                      title: "Booking Complete",
                      description:
                        "Thank you for booking. We will reach out to you to confirm the details for your appointment with Dr. Justina Choi ",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Book with us
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProviderProfile;
