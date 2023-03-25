import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import GraphContainer from "./components/GraphContainer";
import SelectTab from "./components/SelectTab";
import { StyledContainer } from "./styles/pageStyles";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Analytic = (): JSX.Element => {
  const [selected, setSelected] = useState(0);
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
      >
        <TextContainer text={"Analytics"} size={theme.fontSizes.xl5} />
        <SelectTab selected={selected} setSelected={setSelected} />
        <Flex
          height={"70vh"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GraphContainer selected={selected} />
          <Flex
            height={"100%"}
            width={"50%"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <TextContainer
              text={"Stats"}
              align={"center"}
              size={theme.fontSizes.xl4}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        height={"65vh"}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        direction={"column"}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
        backgroundColor={theme.colors.bgInput}
      >
        <TextContainer
          text="Graph Formation And Methodology"
          size={theme.fontSizes.xl5}
        />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box width={"55%"}>
            <Text fontSize={theme.fontSizes.lg} color={theme.colors.gray}>
              We use a thorough methodology to rate our users based on factors
              related to their music and social activity. Your rating is
              calculated based on your uploaded music quality and popularity,
              likes and dislikes received, and overall engagement with other
              users. Your total number of followers, friends, and followers on
              our website also contribute to your rating. Our approach provides
              a fair and accurate rating of our users, reflecting their talent,
              creativity, and social impact on the platform, helping you
              understand your performance and motivating you to improve as a
              musician.
            </Text>
            <Text fontSize={theme.fontSizes.lg} color={theme.colors.gray}>
              We offer an easy-to-understand visualization of your rating trends
              over time, displaying a graph with your rating along with the
              users before and after you. The platform provides three types of
              charts (bar graph, line chart, and pie chart) for you to choose
              from, giving you a clear picture of how your rating has evolved
              over time and helping you identify areas for improvement. By
              providing these insights, we believe we can help you achieve your
              goals and become a successful musician on our platform.
            </Text>
          </Box>
          <Box height={"100%"} width={"40%"}>
            <Image src={"/img5.png"} height={"100%"} width={"100%"} />
          </Box>
        </Box>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default Analytic;
