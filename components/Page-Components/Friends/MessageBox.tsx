import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MessageBox = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Flex
      height={"100%"}
      width={"75%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      direction={"column"}
      padding={theme.space[4]}
      paddingLeft={theme.space[9]}
      overflow={"scroll"}
    ></Flex>
  );
};
export default MessageBox;
