/* eslint-disable require-jsdoc */
import { Container, useTheme } from "@chakra-ui/react";
import * as React from "react";
import { dataList } from "../../../../dummy-data/data";
import Card from "./Card";

const AlignItemsList = () => {
  const theme = useTheme();
  return (
    <Container
      w="100%"
      centerContent
      overflow={"auto"}
      backgroundColor="transparent"
      border={"none"}
      borderRadius={0}
      padding={theme.space[2]}
    >
      {dataList.map(function (data) {
        const { id, songName, timeStamp, type } = data;
        return (
          <Card
            key={id}
            songName={songName}
            timeStamp={timeStamp}
            type={type}
          />
        );
      })}
    </Container>
  );
};

export default AlignItemsList;
