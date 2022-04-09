import React from "react";
import { Box, Text, useTheme, Stack } from "@chakra-ui/react";

const Listing = ({ icon, header, content }) => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      <Box p="8px" borderRadius="3px" bgColor={theme.colors.neutral[100]}>
        {/* <Map /> */}
        {icon}
      </Box>
      <Stack direction={"column"} spacing={0}>
        <Text
          fontSize="12px"
          fontWeight={400}
          color={theme.colors.neutral[700]}
        >
          {header}
          {/* Location */}
        </Text>
        <Text
          fontSize="14px"
          fontWeight={500}
          color={theme.colors.neutral[800]}
        >
          {content}
          {/* Toronto, Ontario */}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Listing;
