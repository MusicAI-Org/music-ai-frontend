import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import BarGraph from "./Graphs/BarGraph";
import ScatterGraph from "./Graphs/ScatterGraph";
import PieGraph from "./Graphs/PieGraph";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

interface Props {
  selected: number;
}

const GraphContainer = (props: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <Flex
      height={"70vh"}
      width={"50%"}
      marginBottom={theme.space[8]}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      {props.selected === 0 && <BarGraph />}
      {props.selected === 1 && <ScatterGraph />}
      {props.selected === 2 && <PieGraph />}
    </Flex>
  );
};
export default GraphContainer;
