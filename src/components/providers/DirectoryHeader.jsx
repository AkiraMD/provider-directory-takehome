import React from "react";
import {
  Flex,
  useTheme,
  Text,
  Tag,
  TagLabel,
  Container,
} from "@chakra-ui/react";

const DirectoryHeader = () => {
  const theme = useTheme();

  return (
    <Flex
      bgColor={theme.colors.neutral[0]}
      px={20}
      h={192}
      placeContent="center"
    >
      <Container py="24px" px="8px">
        <Text
          color={theme.colors.neutral[900]}
          fontWeight={500}
          fontSize="24px"
          my="5px"
        >
          Browse our providers
        </Text>
        <Text
          color={theme.colors.neutral[700]}
          fontWeight={400}
          fontSize="14.8px"
          my="5px"
        >
          Mental Wellness
        </Text>
        <Tag
          bgColor={theme.colors.neutral[0]}
          borderColor={theme.colors.neutral[300]}
          borderWidth={1}
          borderRadius="94px"
          my="10px"
          p="10px"
          h="37px"
          w="69px"
          display="flex"
          justifyContent="center"
        >
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.49994 0.324951C2.0523 0.324951 0.0682373 2.20995 0.0682373 4.53578C0.0682373 5.42953 0.363779 6.29793 0.909181 7.00578C0.925431 7.09668 0.955392 7.18453 0.999065 7.26578L3.63 12.1682C3.80774 12.481 4.13985 12.6745 4.49989 12.6745C4.85992 12.6745 5.19203 12.481 5.36977 12.1682L8.00071 7.25668C8.04438 7.17543 8.07434 7.08758 8.09059 6.99668C8.63598 6.28879 8.93154 5.42043 8.93154 4.52668C8.93154 2.21008 6.94748 0.325081 4.49984 0.325081L4.49994 0.324951ZM4.38822 6.31821C3.40154 6.31821 2.60072 5.5575 2.60072 4.62054C2.60072 3.68312 3.40154 2.92287 4.38822 2.92287C5.37489 2.92287 6.17572 3.68358 6.17572 4.62054C6.17572 5.5575 5.37489 6.31821 4.38822 6.31821Z"
              fill="#6277F0"
            />
          </svg>
          <TagLabel ml="7px" color={theme.colors.neutral[800]} fontWeight={500}>
            ON
          </TagLabel>
        </Tag>
        {/* <Box>Logo</Box>
    <Flex alignItems={"center"}>
      <Stack direction={"row"} spacing={7}>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Flex> */}
      </Container>
    </Flex>
  );
};

export default DirectoryHeader;
