import React from "react";
import { Flex, Image, Text, useTheme } from "@chakra-ui/react";
import Footer from "../../utils/Footer/Footer";
import { StyledContainer } from "../Start/styles/pageStyles";
import CardContainer from "./components/CardContainer";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
type Props = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

const PremiumDiv = (props: Props) => {
  const theme = useTheme();
  return (
    <StyledContainer color="">
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100vh"
        width="100%"
        marginTop={theme.space[5]}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          height="100%"
          width="70%"
        >
          <Text
            fontSize={[
              theme.fontSizes.xl2,
              theme.fontSizes.xl3,
              theme.fontSizes.xl4,
              theme.fontSizes.xl5,
            ]}
            color={theme.colors.white}
            width={["100%", "68%", "58%", "48%", "25%"]}
          >
            <span
              style={{
                color: theme.colors.ci,
              }}
            >
              Flexible{" "}
            </span>
            Plans
          </Text>
          <Text
            fontSize={[
              theme.fontSizes.md,
              theme.fontSizes.lg,
              theme.fontSizes.xl,
            ]}
            color={theme.colors.gray}
            width={["100%", "63%", "53%", "43%", "28%"]}
            textAlign="center"
          >
            Choose a plan that works best for you and your team.
          </Text>
          <Flex
            direction={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            height="70%"
            width="100%"
            padding={theme.space[5]}
          >
            <CardContainer />
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          height="80%"
          width="30%"
        >
          <Image src="/img7.png" h={"100%"} w={"100%"} />
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default PremiumDiv;
