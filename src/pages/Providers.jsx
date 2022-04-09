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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import React from "react";
import DirectoryHeader from "../components/DirectoryHeader";

const Providers = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  return (
    <Box bgColor={theme.colors.neutral[400]} h="100vh">
      <DirectoryHeader />
      abcdef
    </Box>
  );
};

export default Providers;
