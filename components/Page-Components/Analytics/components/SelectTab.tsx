import React from "react";
import { Flex, useTheme, Select } from "@chakra-ui/react";
import { BsFillPieChartFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
interface Props {
  selected: number;
  setSelected: (selected: number) => void;
}

const SelectTab = (props: Props): JSX.Element => {
  const theme = useTheme();
  const style1 = {
    marginLeft: theme.space[8],
    color: props.selected === 0 ? theme.colors.ci : theme.colors.white,
    cursor: "pointer",
  };
  const style2 = {
    marginLeft: theme.space[8],
    color: props.selected === 1 ? theme.colors.ci : theme.colors.white,
    cursor: "pointer",
  };
  const style3 = {
    marginLeft: theme.space[8],
    color: props.selected === 2 ? theme.colors.ci : theme.colors.white,
    cursor: "pointer",
  };

  const styles = {
    backgroundColor: theme.colors.bgDark,
    height: "10vh",
    width: "100%",
  };
  return (
    <Flex
      align="center"
      justify="center"
      height="8vh"
      width="50%"
      borderRadius={theme.borderRadius.lg}
      border={`1px solid ${theme.colors.white}`}
      padding={theme.space[4]}
      marginTop={theme.space[4]}
      marginBottom={theme.space[4]}
    >
      <Flex height={"100%"} width={"50%"} align="center" justify="center">
        <Select
          placeholder="Cumulative Analysis"
          color={theme.colors.white}
          backgroundColor={theme.colors.bgDark}
          height={"5vh"}
          width={"100%"}
          margin={theme.space[9]}
          border={`1px solid ${theme.colors.ci}`}
        >
          <option value="option1" style={styles}>
            Personal Analysis
          </option>
        </Select>
      </Flex>
      <Flex
        height={"100%"}
        width={"50%"}
        justifyContent="flex-end"
        alignItems={"center"}
      >
        <GoGraph
          size={25}
          style={style1}
          onClick={() => props.setSelected(0)}
        />
        <ImStatsDots
          size={25}
          style={style2}
          onClick={() => props.setSelected(1)}
        />
        <BsFillPieChartFill
          size={25}
          style={style3}
          onClick={() => props.setSelected(2)}
        />
      </Flex>
    </Flex>
  );
};
export default SelectTab;
