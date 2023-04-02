import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import Contact from "./components/Contact";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const ContactContainer = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Flex
      height={"100%"}
      width={"25%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      direction={"column"}
      padding={`${theme.space[2]}`}
      borderRight={`1px solid ${theme.colors.ci}`}
      overflow={"scroll"}
    >
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </Flex>
  );
};
export default ContactContainer;
