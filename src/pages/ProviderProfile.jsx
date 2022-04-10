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
import React from "react";
import { useParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Map } from "../components/shared/icons/Map";
import ProviderBio from "../components/provider-profile/ProviderBio";
import Listing from "../components/provider-profile/Listing";
import { Education } from "../components/shared/icons/Education";
import { Global } from "../components/shared/icons/Global";
import { useProvider } from "../hooks";
import ErrorPage from "./ErrorPage";

const ProviderProfile = () => {
  const { providerId } = useParams();
  const { data, loading, error } = useProvider(providerId);
  const theme = useTheme();
  const toast = useToast();

  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
      py="24px"
    >
      {loading ? (
        <>loading........</>
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        data && (
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
                {data.name}, {data.title}
              </Text>
            </Flex>
            <Flex mt="24px">
              <Box flex="1">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  border={`1px solid ${theme.colors.neutral[300]}`}
                />
                <Button>Go back</Button>
              </Box>
              <Box flex="2" ml="20px">
                <Box bgColor={theme.colors.neutral[0]}>
                  <ProviderBio
                    name={data.name}
                    title={data.title}
                    bio={data.bio}
                  />
                  <Divider />
                  <Box px="32px" py="24px">
                    <VStack spacing="16px" mb="16px" alignItems="flex-start">
                      <Listing
                        icon={<Map />}
                        header="Location"
                        content={data.location}
                      />
                      <Listing
                        icon={<Education />}
                        header="Education"
                        content={data.education}
                      />
                      <Listing
                        icon={<Global />}
                        header="Language"
                        content={
                          data.languages ? data.languages.join(", ") : ""
                        }
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
                          description: `Thank you for booking. We will reach out to you to confirm the details for your appointment with ${data.name}`,
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
        )
      )}
    </Box>
  );
};

export default ProviderProfile;
