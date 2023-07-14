import {
  Flex,
  SimpleGrid,
  Spinner,
  useTheme,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import ViewMoreButton from "./components/ViewMoreButton";
import YoutubeMusicTile from "./components/YoutubeMusicTile";
import YoutubeVideosTile from "./components/YoutubeVideosTile";
import useBasicData from "../../../swr/useBasicData";
import useAuthData from "../../../swr/useAuthData";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const SearchMusic = (): JSX.Element => {
  const theme = useTheme();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }
  const { allTypeGenre } = useAuthData({
    id: userId,
  });
  console.log("all", allTypeGenre);
  const { data, error, isLoading } = useBasicData();

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

  if (error || data?.error) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={data?.error || "Error loading data"}
          color={theme.colors.danger}
          size="1.2rem"
          align="center"
        />
      </Flex>
    );
  }
  if (allTypeGenre?.message == "Internal server error") {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={
            data?.error || "Server Is Down, We Apologise For The Inconvinience!"
          }
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
        marginBottom={theme.space[9]}
      >
        <TextContainer
          text={"Youtube Music"}
          size={!isSmallerThan768 ? theme.fontSizes.xl5 : theme.fontSizes.xl3}
        />
        <SimpleGrid
          spacing="20px"
          marginTop={theme.space[5]}
          marginBottom={theme.space[9]}
          minChildWidth={"300px"}
        >
          {data?.topArtistsData?.slice(0, 9).map(
            (pop: {
              snippet: {
                description: string;
                thumbnails: { high: any };
                title: string;
              };
              id: string;
            }) => {
              return (
                <YoutubeMusicTile
                  id={pop.id}
                  key={pop.id}
                  heading={pop.snippet.title}
                  description={pop.snippet.description}
                  src={
                    pop
                      ? pop.snippet.thumbnails.high.url
                      : "https://i.ytimg.com/vi/1ZQ2wZQZQwQ/maxresdefault.jpg"
                  }
                />
              );
            }
          )}
          {/* <YoutubeMusicTile /> */}
        </SimpleGrid>
        <ViewMoreButton />

        <TextContainer
          text={"Songs What You Like!"}
          size={!isSmallerThan768 ? theme.fontSizes.xl5 : theme.fontSizes.xl3}
        />
        <TextContainer
          text={"Based On Your Genre Recommendations"}
          size={theme.fontSizes.xl}
        />
        <SimpleGrid
          spacing="20px"
          marginTop={theme.space[5]}
          marginBottom={theme.space[9]}
          minChildWidth={"300px"}
        >
          {allTypeGenre?.musicListBasedOnGenre?.map((arrayOfMusic: any) => {
            return arrayOfMusic?.map(
              (music: {
                id: {
                  videoId: string;
                };
                snippet: {
                  publishTime: string;
                  channelTitle: string;
                  thumbnails: { high: any };
                  title: string;
                };
              }) => {
                return (
                  <YoutubeVideosTile
                    id={music?.id?.videoId}
                    key={music?.id?.videoId}
                    videoId={music?.id?.videoId}
                    heading={music?.snippet?.title}
                    channelTitle={music?.snippet?.channelTitle}
                    publishTime={music?.snippet?.publishTime}
                    src={
                      music?.snippet?.thumbnails?.high?.url ||
                      "https://i.ytimg.com/vi/1ZQ2wZQZQwQ/maxresdefault.jpg"
                    }
                  />
                );
              }
            );
          })}
        </SimpleGrid>
        <ViewMoreButton />

        {allTypeGenre?.musicListBasedOnFriendsGenre?.length !== 0 && (
          <TextContainer
            text={"Songs What Your Friends Like!"}
            size={!isSmallerThan768 ? theme.fontSizes.xl5 : theme.fontSizes.xl3}
          />
        )}

        {allTypeGenre?.musicListBasedOnFriendsGenre?.length !== 0 && (
          <TextContainer
            text={"Listen To Your Friends Genre Recommendations"}
            size={theme.fontSizes.xl}
          />
        )}
        <SimpleGrid
          spacing="20px"
          marginTop={theme.space[5]}
          marginBottom={theme.space[9]}
          minChildWidth={"300px"}
        >
          {allTypeGenre?.musicListBasedOnFriendsGenre?.map(
            (arrayOfMusic: any) => {
              return arrayOfMusic?.map(
                (music: {
                  id: {
                    videoId: string;
                  };
                  snippet: {
                    publishTime: string;
                    channelTitle: string;
                    thumbnails: { high: any };
                    title: string;
                  };
                }) => {
                  return (
                    <YoutubeVideosTile
                      id={music?.id?.videoId}
                      key={music?.id?.videoId}
                      videoId={music?.id?.videoId}
                      heading={music?.snippet?.title}
                      channelTitle={music?.snippet?.channelTitle}
                      publishTime={music?.snippet?.publishTime}
                      src={
                        music?.snippet?.thumbnails?.high?.url ||
                        "https://i.ytimg.com/vi/1ZQ2wZQZQwQ/maxresdefault.jpg"
                      }
                    />
                  );
                }
              );
            }
          )}
        </SimpleGrid>
        {allTypeGenre?.musicListBasedOnFriendsGenre?.length !== 0 && (
          <ViewMoreButton />
        )}
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default SearchMusic;
