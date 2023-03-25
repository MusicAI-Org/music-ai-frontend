/* eslint-disable require-jsdoc */
// import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { RecentList } from "../../../../dummy-data/Recents";
import Card from "./Card";

const PlayList = () => {
  return (
    <>
      {RecentList.slice(0, 3).map(function (data) {
        const { id, songName, by, time, stars } = data;
        return (
          <Card
            key={id}
            songName={songName}
            by={by}
            time={time}
            stars={stars}
          />
        );
      })}
    </>
  );
};

export default PlayList;
