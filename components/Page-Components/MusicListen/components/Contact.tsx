import React from "react";
import { Flex, Image, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../utils/Texts/TextContainer";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Contact = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Flex
      height={"15%"}
      width={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      padding={theme.space[4]}
      borderBottom={`0.5px solid ${theme.colors.bgBoxLighter}`}
      cursor={"pointer"}
      backgroundColor={theme.colors.bgBox}
    >
      <Flex
        height={"100%"}
        width={"30%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Image
          src={"https://avatars.githubusercontent.com/u/47048420?v=4"}
          height={"50px"}
          width={"50px"}
          borderRadius={"50%"}
        />
      </Flex>
      <Flex
        height={"100%"}
        width={"70%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        paddingLeft={theme.space[4]}
      >
        <TextContainer
          text={"Paarth Jain"}
          size={theme.fontSizes.xl2}
          color={theme.colors.grayBorderBox}
        />
      </Flex>
    </Flex>
  );
};
export default Contact;
