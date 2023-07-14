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
  statsData: {
    allUsersData: [Object];
    dislikesCount: number;
    likesCount: number;
    rank: number;
    role: string;
    totalUsers: number;
    viewsCount: number;
  };
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
      {props.selected === 0 && <BarGraph statsData={props.statsData} />}
      {props.selected === 1 && <ScatterGraph statsData={props.statsData} />}
      {props.selected === 2 && <PieGraph statsData={props.statsData} />}
    </Flex>
  );
};
export default GraphContainer;
