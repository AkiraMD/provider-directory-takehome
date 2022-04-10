import React from "react";
import { Box, Stack, Avatar, Text, useTheme, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProviderView = ({ id, name, title, bio, availability, image }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      bgColor={theme.colors.neutral[0]}
      _hover={{
        bgColor: theme.colors.neutral[300],
        cursor: "pointer",
      }}
      w="full"
      rounded="md"
      py={3}
      px={6}
      overflow="hidden"
      maxH="167px"
      onClick={() => {
        navigate(`/provider/profile/${id}`);
      }}
    >
      <Stack direction={"row"} spacing={4} align={"center"}>
        <Avatar
          w="56px"
          h="56px"
          src={image ? image : "https://bit.ly/dan-abramov"}
          alt={name}
          borderWidth={1}
          borderColor={theme.colors.neutral[300]}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text
            fontWeight={500}
            color={theme.colors.neutral[900]}
            fontSize="16px"
            noOfLines={1}
          >
            {name}, {title}
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
      <Stack my="10px">
        <Text
          color={theme.colors.neutral[700]}
          fontWeight={400}
          fontSize="14px"
          noOfLines={2}
        >
          {bio}
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
          Available {availability}
        </Badge>
      </Box>
    </Box>
  );
};

export default ProviderView;
