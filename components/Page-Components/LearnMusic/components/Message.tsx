import { Flex, useTheme } from "@chakra-ui/react";
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

interface Props {
  model: {
    message: string;
    type: string;
  };
}

const Message = (props: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <Flex
      height={"fit-content"}
      width={"100%"}
      justifyContent={props.model.type == "bot" ? "flex-start" : "flex-end"}
      alignItems={props.model.type == "bot" ? "flex-start" : "flex-end"}
      marginBottom={theme.space[4]}
    >
      <Flex
        height={"fit-content"}
        maxWidth={"50%"}
        width={"fit-content"}
        padding={theme.space[3]}
        marginBottom={theme.space[4]}
        backgroundColor={theme.colors.ciDark}
        borderRadius={theme.borderRadius.md}
        overflowWrap={"anywhere"}
      >
        {props.model.message}
      </Flex>
    </Flex>
  );
};
export default Message;
