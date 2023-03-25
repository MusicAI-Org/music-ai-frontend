/* eslint-disable require-jsdoc */
// import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { List } from "../../../../dummy-data/PlayList";
import Card from "./Card";

const PlayList = () => {
  return (
    <>
      {List.slice(0, 4).map(function (data) {
        const { id, heading, songsNumber, stars } = data;
        return (
          <Card
            key={id}
            heading={heading}
            songsNumber={songsNumber}
            stars={stars}
          />
        );
      })}
    </>
  );
};

export default PlayList;
