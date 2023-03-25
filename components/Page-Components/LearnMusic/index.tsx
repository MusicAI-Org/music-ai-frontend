import { Button, Flex, Input, useTheme } from "@chakra-ui/react";
import React from "react";
import { TbSend } from "react-icons/tb";
import Footer from "../../utils/Footer/Footer";
import { StyledContainer } from "../Global/styles/styles";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const LearnMusic = (): JSX.Element => {
  // console.log("hihih", selected);
  const theme = useTheme();
  return (
    <StyledContainer color={""}>
      <Flex
        height={"fit-content"}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        direction={"column"}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
        marginBottom={theme.space[9]}
      >
        <Flex
          height={"85vh"}
          width={"80%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"column"}
          padding={theme.space[4]}
          border={`1px solid ${theme.colors.ci}`}
          overflowY="scroll"
          overflowX="hidden"
          borderRadius={theme.borderRadius.md}
          color={theme.colors.white}
          position="relative"
        >
          <Flex
            height={"10%"}
            width={"80%"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            backgroundColor={theme.colors.bgInput}
            borderRadius={theme.borderRadius.md}
            bottom={0}
            margin={theme.space[4]}
            padding={theme.space[4]}
          >
            <Input
              placeholder="Chat with the bot..."
              width="100%"
              height="100%"
              color={theme.colors.white}
              _placeholder={{ color: theme.colors.grayDarker }}
              _focus={{
                border: "none",
              }}
              style={{
                fontSize: theme.fontSizes.h2,
                outline: "none",
                textDecoration: "none",
              }}
            />
            <Button
              height="100%"
              width="5%"
              backgroundColor={theme.colors.transparent}
            >
              <TbSend size={20} color={theme.colors.ci} style={{}} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default LearnMusic;
