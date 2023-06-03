import React from "react";
import { Flex, useTheme, Select } from "@chakra-ui/react";
import { BiFilterAlt } from "react-icons/bi";

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
  const styles = {
    backgroundColor: theme.colors.bgDark,
    height: "10vh",
    width: "100%",
  };
  const style1 = {
    marginLeft: theme.space[8],
    color: props.selected === 0 ? theme.colors.ci : theme.colors.white,
    cursor: "pointer",
  };

  const handleOptionChange = (value: number) => {
    props.setSelected(value);
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="8vh"
      width="70%"
      borderRadius={theme.borderRadius.lg}
      border={`1px solid ${theme.colors.white}`}
      padding={theme.space[4]}
      marginTop={theme.space[4]}
      marginBottom={theme.space[4]}
    >
      <Flex height={"100%"} width={"100%"} align="center" justify="center">
        <Select
          color={theme.colors.white}
          backgroundColor={theme.colors.bgDark}
          height={"5vh"}
          width={"100%"}
          margin={theme.space[9]}
          border={`1px solid ${theme.colors.ciDark}`}
          borderColor={theme.colors.ci}
          _focus={{ border: `1px solid ${theme.colors.ciDark}` }}
          onChange={(e) => handleOptionChange(Number(e.target.value))}
        >
          <option value={0} style={styles}>
            View All
          </option>
          <option value={1} style={styles}>
            View Friends
          </option>
          <option value={2} style={styles}>
            Nearby People
          </option>
          <option value={3} style={styles}>
            Favourite Musicians
          </option>
          <option value={4} style={styles}>
            Genre Specific
          </option>
          <option value={5} style={styles}>
            Friends of Friends
          </option>
        </Select>
      </Flex>
      <Flex
        height={"100%"}
        width={"50%"}
        justifyContent="flex-end"
        alignItems={"center"}
      >
        <BiFilterAlt
          size={25}
          style={style1}
          onClick={() => props.setSelected(0)}
        />
      </Flex>
    </Flex>
  );
};

export default SelectTab;
