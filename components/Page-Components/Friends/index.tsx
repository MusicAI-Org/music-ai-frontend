import { Flex, useTheme } from "@chakra-ui/react";
import React from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import ContactContainer from "./ContactContainer";
import MessageBox from "./MessageBox";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const FriendsContainer = (): JSX.Element => {
  const theme = useTheme();
  return (
    <StyledContainer color={""}>
      <Flex
        height={"90vh"}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        direction={"column"}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
        marginBottom={theme.space[9]}
      >
        <TextContainer text={"Friends"} size={theme.fontSizes.xl5} />
        <Flex
          width={"100%"}
          height={"85%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          marginTop={theme.space[4]}
          border={`1px solid ${theme.colors.ci}`}
          borderRadius={theme.borderRadius.md}
        >
          <ContactContainer />
          <MessageBox />
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default FriendsContainer;
