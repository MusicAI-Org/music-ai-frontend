/* eslint-disable require-jsdoc */
import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { favArtists } from "../../../../dummy-data/favArtists";
import Card from "./Card";

const FavList = () => {
  const theme = useTheme();
  return (
    <Container
      w="100%"
      centerContent
      backgroundColor="transparent"
      border={"none"}
      borderRadius={0}
      padding={theme.space[2]}
    >
      {favArtists.slice(0, 3).map(function (data) {
        const { id, songName, by, stars } = data;
        return <Card key={id} songName={songName} by={by} stars={stars} />;
      })}
    </Container>
  );
};

export default FavList;
