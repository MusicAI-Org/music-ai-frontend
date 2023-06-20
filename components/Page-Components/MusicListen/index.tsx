import {
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import useMLMusic from "../../../swr/community/useMLMusic";
import MusicTile from "./components/MusicTile";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicListeningContainer = (): JSX.Element => {
  const theme = useTheme();

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }

  const { music, isLoading } = useMLMusic({
    id: userId,
  });
  console.log("all music", music?.musicObject);

  const [url, setUrl] = useState("");
  console.log("url", url);

  const handleStateUpdate = (currentUrl: string) => {
    setUrl(currentUrl);
  };

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

  if (
    music?.musicObject?.mostLikedMusic?.length === 0 &&
    music?.musicObject?.music?.length === 0 &&
    music?.musicObject?.filteredTotalCommunityMusic?.length === 0 &&
    music?.musicObject?.musicOfFollowers?.length === 0
  ) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        height={"70vh"}
        width={"100%"}
      >
        <Text
          align={"center"}
          size={theme.fontSizes.xl}
          color={theme.colors.warning}
        >
          No Music Found In The Database, Please Try Again Later.
        </Text>
        <Image
          src={"/credentialsImgs/img2.png"}
          alt={"No Communities"}
          width={300}
          height={300}
        />
      </Flex>
    );
  }
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
        <Flex
          width={"70%"}
          height={"10vh"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          bottom={"5vh"}
        >
          {url.length != 0 && (
            <audio controls autoPlay>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </Flex>
        {music?.musicObject?.mostLikedMusic?.length != 0 && (
          <TextContainer
            text={"Hear What You Liked The Most"}
            size={theme.fontSizes.xl3}
            color={theme.colors.ci}
          />
        )}
        <Flex
          width={"100%"}
          height={"85%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          marginTop={theme.space[4]}
          borderRadius={theme.borderRadius.md}
        >
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
            marginBottom={theme.space[9]}
          >
            {music?.musicObject?.mostLikedMusic?.map(
              (ms: {
                _id: string;
                coverImg: string;
                genre: [];
                views: number;
                artist: {
                  _id: string;
                  name: string;
                };
                musicUrl: string;
                songname: string;
                albumname: string;
                likesCount: number;
              }) => {
                return (
                  <MusicTile
                    id={ms._id}
                    key={ms._id}
                    songname={ms.songname}
                    genre={ms.genre}
                    artist={ms.artist.name}
                    albumname={ms.albumname}
                    likesCount={ms.likesCount}
                    views={ms.views}
                    coverImg={ms.coverImg}
                    musicUrl={ms.musicUrl}
                    setMusicUrl={handleStateUpdate}
                  />
                );
              }
            )}
          </SimpleGrid>
        </Flex>
        {music?.musicObject?.music?.length != 0 && (
          <TextContainer
            text={"Listen To Your Friends"}
            size={theme.fontSizes.xl3}
            color={theme.colors.ci}
          />
        )}
        <Flex
          width={"100%"}
          height={"85%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          marginTop={theme.space[4]}
          borderRadius={theme.borderRadius.md}
        >
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
            marginBottom={theme.space[9]}
          >
            {music?.musicObject?.music?.map(
              (ms: {
                _id: string;
                coverImg: string;
                genre: [];
                views: number;
                artist: {
                  _id: string;
                  name: string;
                };
                musicUrl: string;
                songname: string;
                albumname: string;
                likesCount: number;
              }) => {
                return (
                  <MusicTile
                    id={ms._id}
                    key={ms._id}
                    songname={ms.songname}
                    genre={ms.genre}
                    artist={ms.artist.name}
                    albumname={ms.albumname}
                    likesCount={ms.likesCount}
                    views={ms.views}
                    coverImg={ms.coverImg}
                    musicUrl={ms.musicUrl}
                    setMusicUrl={handleStateUpdate}
                  />
                );
              }
            )}
          </SimpleGrid>
        </Flex>
        {music?.musicObject?.filteredTotalCommunityMusic?.length != 0 && (
          <TextContainer
            text={"Hear To What Your Community Is Listening"}
            size={theme.fontSizes.xl3}
            color={theme.colors.ci}
          />
        )}
        <Flex
          width={"100%"}
          height={"85%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          marginTop={theme.space[4]}
          borderRadius={theme.borderRadius.md}
        >
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
            marginBottom={theme.space[9]}
          >
            {music?.musicObject?.filteredTotalCommunityMusic?.map(
              (ms: {
                _id: string;
                coverImg: string;
                genre: [];
                views: number;
                artist: {
                  _id: string;
                  name: string;
                };
                musicUrl: string;
                songname: string;
                albumname: string;
                likesCount: number;
              }) => {
                return (
                  <MusicTile
                    id={ms._id}
                    key={ms._id}
                    songname={ms.songname}
                    genre={ms.genre}
                    artist={ms.artist.name}
                    albumname={ms.albumname}
                    likesCount={ms.likesCount}
                    views={ms.views}
                    coverImg={ms.coverImg}
                    musicUrl={ms.musicUrl}
                    setMusicUrl={handleStateUpdate}
                  />
                );
              }
            )}
          </SimpleGrid>
        </Flex>
        {music?.musicObject?.musicOfFollowers?.length != 0 && (
          <TextContainer
            text={"Join Your Followers"}
            size={theme.fontSizes.xl3}
            color={theme.colors.ci}
          />
        )}
        <Flex
          width={"100%"}
          height={"85%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          marginTop={theme.space[4]}
          borderRadius={theme.borderRadius.md}
        >
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
            marginBottom={theme.space[9]}
          >
            {music?.musicObject?.musicOfFollowers?.map(
              (ms: {
                _id: string;
                coverImg: string;
                genre: [];
                views: number;
                artist: {
                  _id: string;
                  name: string;
                };
                musicUrl: string;
                songname: string;
                albumname: string;
                likesCount: number;
              }) => {
                return (
                  <MusicTile
                    id={ms._id}
                    key={ms._id}
                    songname={ms.songname}
                    genre={ms.genre}
                    artist={ms.artist.name}
                    albumname={ms.albumname}
                    likesCount={ms.likesCount}
                    views={ms.views}
                    coverImg={ms.coverImg}
                    musicUrl={ms.musicUrl}
                    setMusicUrl={handleStateUpdate}
                  />
                );
              }
            )}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default MusicListeningContainer;
