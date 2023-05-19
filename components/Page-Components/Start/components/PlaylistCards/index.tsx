/* eslint-disable require-jsdoc */
// import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import Card from "./Card";
import useBasicData from "../../../../../swr/useBasicData";
import { Flex, Spinner, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../../utils/Texts/TextContainer";

const PlayList = () => {
  const { data, error, isLoading } = useBasicData();
  const theme = useTheme();
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
        height={"100%"}
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
  return (
    <>
      {data?.topTracksData?.slice(4, 8).map(
        (pop: {
          snippet: {
            channelTitle: string;
            thumbnails: { high: any };
            title: string;
          };
          id: string;
        }) => {
          return (
            <Card
              id={pop.id}
              key={pop.id}
              heading={pop.snippet.title}
              channelTitle={pop.snippet.channelTitle}
              src={
                pop
                  ? pop.snippet.thumbnails.high.url
                  : "https://i.ytimg.com/vi/1ZQ2wZQZQwQ/maxresdefault.jpg"
              }
            />
          );
        }
      )}
    </>
  );
};

export default PlayList;
