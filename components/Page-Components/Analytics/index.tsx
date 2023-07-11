import { Box, Flex, Image, Spinner, Text, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import GraphContainer from "./components/GraphContainer";
import SelectTab from "./components/SelectTab";
import { StyledContainer } from "./styles/pageStyles";
import useStats from "../../../swr/useStats";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Analytic = (): JSX.Element => {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();

  let id;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      id = parsedUser.user._id;
    }
  }
  const { statsData, isLoading, error } = useStats({ id });
  console.log(statsData);

  if (isLoading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor={theme.colors.gray}
          color={theme.colors.ci}
          size="md"
        />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={"Error loading data"}
          color={theme.colors.danger}
          size="1.2rem"
          align="center"
        />
      </Flex>
    );
  }

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
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <GraphContainer selected={selected} />
          <Flex
            direction={"column"}
            height={"100%"}
            width={"30%"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <TextContainer
              text={"Statistics"}
              align={"center"}
              size={theme.fontSizes.xl4}
            />
            <Flex
              width={"100%"}
              height={"fit-content"}
              direction={"column"}
              padding={theme.space[4]}
              alignItems={"flex-start"}
              marginTop={theme.space[4]}
              color={theme.colors.white}
              justifyContent={"space-evenly"}
              borderRadius={theme.borderRadius.md}
              backgroundColor={theme.colors.bgBoxDarker}
            >
              <Flex>
                <Text fontSize={theme.fontSizes.h1}>Rank : </Text>
                <Text
                  color={theme.colors.warning}
                  marginLeft={theme.space[6]}
                  align={"center"}
                  fontSize={theme.fontSizes.h1}
                >
                  {statsData?.rank} / {statsData?.totalUsers}
                </Text>
              </Flex>
              <Flex>
                <Text fontSize={theme.fontSizes.h1}>Likes On Content : </Text>
                <Text
                  color={theme.colors.warning}
                  marginLeft={theme.space[6]}
                  align={"center"}
                  fontSize={theme.fontSizes.h1}
                >
                  {statsData?.likesCount}
                </Text>
              </Flex>
              <Flex>
                <Text fontSize={theme.fontSizes.h1}>
                  Dislikes On Content :{" "}
                </Text>
                <Text
                  color={theme.colors.warning}
                  marginLeft={theme.space[6]}
                  align={"center"}
                  fontSize={theme.fontSizes.h1}
                >
                  {statsData?.dislikesCount}
                </Text>
              </Flex>
              <Flex>
                <Text fontSize={theme.fontSizes.h1}>Views On Content : </Text>
                <Text
                  color={theme.colors.warning}
                  marginLeft={theme.space[6]}
                  align={"center"}
                  fontSize={theme.fontSizes.h1}
                >
                  {statsData?.viewsCount}
                </Text>
              </Flex>
            </Flex>
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
