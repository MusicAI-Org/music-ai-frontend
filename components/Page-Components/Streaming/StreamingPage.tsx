import React from "react";
import { Button, Flex, Input, useTheme } from "@chakra-ui/react";
import ClickTab from "./components/ClickTab";
import MainTab from "./components/MainTab";
import { StyledContainer } from "../Start/styles/pageStyles";
import Footer from "../../utils/Footer/Footer";
import { TbSend } from "react-icons/tb";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const StreamingPage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <StyledContainer color="">
      <Flex
        height={"90vh"}
        width={"100%"}
        flexDirection={"column"}
        marginBottom={theme.space[9]}
      >
        <Flex height={"70%"} width={"100%"} paddingRight={theme.space[4]}>
          <Flex height={"100%"} width={"70%"}>
            <video width="100%" height="100%" controls autoPlay loop>
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </Flex>
          <Flex
            height={"100%"}
            width={"30%"}
            border={`1px solid orange`}
            overflow="scroll"
            position="relative"
            alignItems={"center"}
            justifyContent={"center"}
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
              margin={theme.space[2]}
              padding={theme.space[2]}
            >
              <Input
                placeholder="Comment..."
                width="100%"
                height="100%"
                color={theme.colors.white}
                _placeholder={{ color: theme.colors.grayDarker }}
                _focus={{
                  border: "none",
                }}
                style={{
                  fontSize: theme.fontSizes.h3,
                  outline: "none",
                  textDecoration: "none",
                }}
              />
              <Button
                height="100%"
                width="20%"
                backgroundColor={theme.colors.transparent}
              >
                <TbSend size={20} color={theme.colors.ci} style={{}} />
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          height={"30%"}
          width={"100%"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Flex height={"90%"} width={"60%"}>
            {/* topic, url, creator, description */}
            <MainTab />
          </Flex>
          <Flex height={"25%"} width={"30%"}>
            {/* views, likes, dislike, url, follow, unfollow */}
            <ClickTab />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default StreamingPage;
