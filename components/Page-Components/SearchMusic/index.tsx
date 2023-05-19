import { Flex, SimpleGrid, Spinner, useTheme } from "@chakra-ui/react";
import React from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import ViewMoreButton from "./components/ViewMoreButton";
import YoutubeMusicTile from "./components/YoutubeMusicTile";
import YoutubeVideosTile from "./components/YoutubeVideosTile";
import useBasicData from "../../../swr/useBasicData";
import useUser from "../../../swr/useUser";
import { useAuth0 } from "@auth0/auth0-react";
import useAuthData from "../../../swr/useAuthData";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const SearchMusic = (): JSX.Element => {
  // console.log("hihih", selected);
  const theme = useTheme();
  const { user } = useAuth0();
  // console.log(user?.email)
  const { user: model } = useUser({ email: user?.email || "" });
  console.log("model", model);
  const { allTypeGenre } = useAuthData({
    id: model?.fullUserPopulatedDetails?._id,
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
        <TextContainer text={"Youtube Music"} size={theme.fontSizes.xl5} />
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="20px"
          height={"fit-content"}
          marginTop={theme.space[4]}
          marginBottom={theme.space[9]}
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
          size={theme.fontSizes.xl5}
        />
        <TextContainer
          text={"Based On Your Genre Recommendations"}
          size={theme.fontSizes.xl}
        />
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="20px"
          height={"fit-content"}
          marginTop={theme.space[4]}
          marginBottom={theme.space[9]}
        >
          {allTypeGenre?.musicListBasedOnGenre?.map((arrayOfMusic: any) => {
            return arrayOfMusic?.map(
              (music: {
                id: {
                  videoId: string;
                };
                snippet: {
                  description: string;
                  thumbnails: { high: any };
                  title: string;
                };
              }) => {
                return (
                  <YoutubeVideosTile
                    id={music?.id?.videoId}
                    key={music?.id?.videoId}
                    heading={music?.snippet?.title}
                    description={music?.snippet?.description}
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

        <TextContainer
          text={"Songs What Your Friends Like!"}
          size={theme.fontSizes.xl5}
        />
        <TextContainer
          text={"Listen To Your Friends Genre Recommendations"}
          size={theme.fontSizes.xl}
        />
        <SimpleGrid
          columns={[2, null, 3]}
          spacing="20px"
          height={"fit-content"}
          marginTop={theme.space[4]}
          marginBottom={theme.space[9]}
        >
          {allTypeGenre?.musicListBasedOnFriendsGenre?.map(
            (arrayOfMusic: any) => {
              return arrayOfMusic?.map(
                (music: {
                  id: {
                    videoId: string;
                  };
                  snippet: {
                    description: string;
                    thumbnails: { high: any };
                    title: string;
                  };
                }) => {
                  return (
                    <YoutubeVideosTile
                      id={music?.id?.videoId}
                      key={music?.id?.videoId}
                      heading={music?.snippet?.title}
                      description={music?.snippet?.description}
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
        <ViewMoreButton />
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default SearchMusic;
