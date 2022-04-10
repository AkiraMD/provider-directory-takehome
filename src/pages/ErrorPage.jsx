import React, { useState } from "react";
import { Box, Text, useTheme, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ error }) => {
  const [showError, setShowError] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text mb="10px" textAlign="center" fontSize="90px" fontWeight={800}>
        404
      </Text>
      <Text textAlign="center" fontSize="30px" mb="20px">
        Whoops. It appears something went wrong. Apologies
      </Text>
      {showError ? (
        <Text textAlign="center" fontSize="24px">
          {JSON.stringify(error)}
        </Text>
      ) : (
        <Text
          mb="20px"
          cursor="pointer"
          color={theme.colors.state.blue}
          onClick={() => {
            setShowError(true);
          }}
        >
          Show details
        </Text>
      )}
      <Button
        w="25%"
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
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back to home page
      </Button>
    </Box>
  );
};

export default ErrorPage;
