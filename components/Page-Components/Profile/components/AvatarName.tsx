/* eslint-disable require-jsdoc */
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

type Props = {
  name?: string;
  role?: string;
};
const AvatarName = (props: Props) => {
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
      <Text fontSize="1.7rem" color={theme.colors.white}>
        {props.name}
      </Text>
      <Text fontSize="1.3rem" color={theme.colors.warning}>
        #{props.role}
      </Text>
    </Box>
  );
};

export default AvatarName;
