import { Flex, SimpleGrid, useTheme } from "@chakra-ui/react";
import React from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import ViewMoreButton from "./components/ViewMoreButton";
import YoutubeMusicTile from "./components/YoutubeMusicTile";
import YoutubeVideosTile from "./components/YoutubeVideosTile";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const SearchMusic = (): JSX.Element => {
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
        <TextContainer text={"Youtube Music"} size={theme.fontSizes.xl5} />
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="20px"
          height={"fit-content"}
          marginTop={theme.space[4]}
          marginBottom={theme.space[9]}
        >
          <YoutubeMusicTile />
          <YoutubeMusicTile />
          <YoutubeMusicTile />
          <YoutubeMusicTile />
          <YoutubeMusicTile />
          <YoutubeMusicTile />
        </SimpleGrid>
        <ViewMoreButton />

        <TextContainer text={"Youtube Videos"} size={theme.fontSizes.xl5} />
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="20px"
          height={"fit-content"}
          marginTop={theme.space[4]}
          marginBottom={theme.space[9]}
        >
          <YoutubeVideosTile />
          <YoutubeVideosTile />
          <YoutubeVideosTile />
          <YoutubeVideosTile />
          <YoutubeVideosTile />
          <YoutubeVideosTile />
        </SimpleGrid>
        <ViewMoreButton />
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default SearchMusic;
