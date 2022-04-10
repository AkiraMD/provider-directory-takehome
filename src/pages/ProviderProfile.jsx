import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useTheme,
  Button,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useProvider } from "../hooks";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";
import ProviderInformation from "../components/provider-profile/ProviderInformation";

const ProviderProfile = () => {
  const { providerId } = useParams();
  const { data, loading, error } = useProvider(providerId);
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      bgColor={theme.colors.neutral[200]}
      h="100%"
      border={`1px solid ${theme.colors.neutral[400]}`}
      py="24px"
    >
      {loading ? (
        <Container maxW="800px">
          <HStack spacing={2}>
            <Skeleton height="500px" flex={1} />
            <Skeleton height="500px" flex={2} />
          </HStack>
        </Container>
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        Object.keys(data).length > 0 && (
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
                  objectFit="cover"
                  w="100%"
                  h="289px"
                  src={
                    data.avatarUrl
                      ? data.avatarUrl
                      : "https://bit.ly/dan-abramov"
                  }
                  alt={data.name}
                  border={`1px solid ${theme.colors.neutral[300]}`}
                />
                <Button
                  mt="2px"
                  borderRadius="2000px"
                  w="full"
                  bgColor={theme.colors.primary[500]}
                  _hover={{
                    bgColor: theme.colors.primary[600],
                  }}
                  color={theme.colors.neutral[0]}
                  _focus={{
                    boxShadow: "none",
                    bgColor: theme.colors.primary[600],
                  }}
                  _active={{
                    bgColor: theme.colors.primary[600],
                  }}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Go back
                </Button>
              </Box>
              <ProviderInformation
                name={data.name}
                title={data.title}
                bio={data.bio}
                education={data.education}
                languages={data.languages}
                location={data.location}
              />
            </Flex>
          </Container>
        )
      )}
    </Box>
  );
};

export default ProviderProfile;
