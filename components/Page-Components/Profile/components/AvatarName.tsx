/* eslint-disable require-jsdoc */
import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const AvatarName = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  console.log(user);
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
      <Text fontSize="1.3rem" color={theme.colors.white}>
        {user?.nickname}
      </Text>
      <Text fontSize="1rem" color={theme.colors.gray}>
        Novice
      </Text>
    </Box>
  );
};

export default AvatarName;
