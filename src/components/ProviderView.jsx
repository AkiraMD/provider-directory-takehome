import React from "react";
import {
  Box,
  Center,
  Stack,
  Avatar,
  Text,
  useColorModeValue,
  useTheme,
  Badge,
} from "@chakra-ui/react";

const ProviderView = () => {
  const theme = useTheme();

  return (
    // <Center py={6} w="full">
    <Box
      bgColor={theme.colors.neutral[0]}
      _hover={{
        bgColor: theme.colors.neutral[300],
        cursor: "pointer",
      }}
      // maxW={"445px"}
      w="full"
      rounded="md"
      p={6}
      overflow="hidden"
    >
      <Stack direction={"row"} spacing={4} align={"center"}>
        <Avatar
          w="56px"
          h="56px"
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
          borderWidth={1}
          borderColor={theme.colors.neutral[300]}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text
            fontWeight={500}
            color={theme.colors.neutral[900]}
            fontSize="16px"
          >
            Dylan Zambrano, MSW
          </Text>
          <Text
            fontWeight={400}
            color={theme.colors.neutral[700]}
            fontSize="12px"
          >
            Registered Social Worker
          </Text>
        </Stack>
      </Stack>
      <Stack my="11px">
        <Text
          color={theme.colors.neutral[700]}
          fontWeight={400}
          fontSize="14px"
        >
          Dylan is a therapist of 15 years experience. Working in international
          contexts, her background includes community health care, paediatrics,
          and geriatrics. Lorem ipsum ...
        </Text>
      </Stack>
      <Box d="flex" alignItems="baseline">
        <Badge
          rounded="full"
          px="12px"
          py="6px"
          fontWeight={600}
          fontSize="12px"
          color={theme.colors.neutral[800]}
          bgColor={theme.colors.secondary[200]}
        >
          Available tomorrow
        </Badge>
      </Box>
    </Box>
    // </Center>
  );
};

export default ProviderView;
