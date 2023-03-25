/* eslint-disable require-jsdoc */
import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { dataList } from "../../../../dummy-data/friendsData";
import Card from "./Card";

const FriendsList = () => {
  const theme = useTheme();
  return (
    <Container
      w="100%"
      centerContent
      overflow={"hidden"}
      overflowY={"scroll"}
      backgroundColor="transparent"
      border={"none"}
      borderRadius={0}
      padding={theme.space[2]}
    >
      {dataList.slice(0, 4).map(function (data) {
        const { id, name, songName, time, movieName } = data;
        return (
          <Card
            key={id}
            name={name}
            songName={songName}
            time={time}
            movieName={movieName}
          />
        );
      })}
    </Container>
  );
};

export default FriendsList;
