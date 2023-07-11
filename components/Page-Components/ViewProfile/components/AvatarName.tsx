/* eslint-disable require-jsdoc */
import * as React from "react";
import { Box, Flex, FormLabel, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const AvatarName = (props: any) => {
  const theme = useTheme();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      display={"flex"}
      // flexDirection={"column"}
      width={"60%"}
      height={"100%"}
      position={"relative"}
      border="none"
    >
      <Flex
        width={"60%"}
        height={"100%"}
        direction={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <FormLabel color={theme.colors.ci} fontSize={theme.fontSizes.xl1}>
          Avatar Name
        </FormLabel>
        <Text fontSize="1.4rem" color={theme.colors.white}>
          {props.avatarName}
        </Text>
      </Flex>
      <Flex
        width={"40%"}
        height={"100%"}
        direction={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <FormLabel color={theme.colors.ci} fontSize={theme.fontSizes.xl1}>
          Role
        </FormLabel>
        <Text fontSize="1.4rem" color={theme.colors.warning}>
          #{props.role}
        </Text>
      </Flex>
    </Box>
  );
};

export default AvatarName;
