import React from "react";
import {
  Box,
  Divider,
  useTheme,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import Listing from "./Listing";
import { Education } from "../shared/icons/Education";
import { Map } from "../shared/icons/Map";
import { Global } from "../shared/icons/Global";
import ProviderBio from "./ProviderBio";

const ProviderInformation = ({
  name,
  title,
  bio,
  education,
  languages,
  location,
}) => {
  const theme = useTheme();
  const toast = useToast();

  return (
    <Box flex="2" ml="20px">
      <Box bgColor={theme.colors.neutral[0]}>
        <ProviderBio name={name} title={title} bio={bio} />
        <Divider />
        <Box px="32px" py="24px">
          <VStack spacing="16px" mb="16px" alignItems="flex-start">
            <Listing icon={<Map />} header="Location" content={location} />
            <Listing
              icon={<Education />}
              header="Education"
              content={education}
            />
            <Listing
              icon={<Global />}
              header="Language"
              content={languages.join(", ")}
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
                description: `Thank you for booking. We will reach out to you to confirm the details for your appointment with ${name}`,
                status: "success",
                duration: 1000,
                isClosable: true,
              })
            }
          >
            Book with us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProviderInformation;
