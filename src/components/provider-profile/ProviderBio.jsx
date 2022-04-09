import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const ProviderBio = () => {
  const theme = useTheme();

  return (
    <Box px="32px" py="24px">
      <Text fontSize="18px" fontWeight={500} color={theme.colors.neutral[900]}>
        Dr. Justina Choi, MSW
      </Text>
      <Text fontSize="14px" fontWeight={500} color={theme.colors.neutral[700]}>
        Psychologist
      </Text>
      <Accordion
        defaultIndex={[0]}
        allowMultiple={true}
        borderColor={theme.colors.neutral[0]}
      >
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <AccordionPanel
                pb={4}
                color={theme.colors.neutral[700]}
                fontSize="14px"
                fontWeight={400}
                px={0}
              >
                Justina is a therapist of 15 years experience. Working in
                international contexts, her background includes community health
                care, paediatrics, and She works collaboratively with
                individuals to address mental health concerns such as anxiety,
                depression, work/stress issues, emotion regulation, trauma, OCD,
                and other difficulties.
              </AccordionPanel>
              <h2>
                <AccordionButton
                  px={0}
                  _hover={{
                    bgColor: "initial",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <Flex flex="1" textAlign="left">
                    <Text
                      fontSize="14.8px"
                      fontWeight={500}
                      color={theme.colors.secondary[500]}
                    >
                      Read {isExpanded ? "less" : "more"}
                    </Text>
                    <Text>
                      {isExpanded ? (
                        <ChevronUpIcon color={theme.colors.secondary[500]} />
                      ) : (
                        <ChevronDownIcon color={theme.colors.secondary[500]} />
                      )}
                    </Text>
                  </Flex>
                </AccordionButton>
              </h2>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ProviderBio;
