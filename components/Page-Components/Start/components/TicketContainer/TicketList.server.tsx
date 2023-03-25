/* eslint-disable require-jsdoc */
// import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { List } from "../../../../dummy-data/Tickets";
import Card from "./Card";

const TicketList = () => {
  // const theme = useTheme();
  return (
    <>
      {List.slice(0, 4).map(function (data) {
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
    </>
  );
};

export default TicketList;
