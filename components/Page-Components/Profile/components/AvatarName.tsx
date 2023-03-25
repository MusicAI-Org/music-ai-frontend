/* eslint-disable require-jsdoc */
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const AvatarName = () => {
  const theme = useTheme();
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      display={"flex"}
      flexDirection={"column"}
      width={"60%"}
      height={"100%"}
      position={"relative"}
      border="none"
    >
      <Text fontSize="1.5rem" color={theme.colors.white}>
        Paarth#2608
      </Text>
      <Text fontSize="1rem" color={theme.colors.gray}>
        Professional
      </Text>
    </Box>
  );
};

export default AvatarName;
