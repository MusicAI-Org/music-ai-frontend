import React from "react";
import { Flex, useTheme, Select } from "@chakra-ui/react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
interface Props {
  selected: string;
  setSelected: (selected: string) => void;
}

const SelectTab = (props: Props): JSX.Element => {
  // const [selected, setSelected] = useState("Upload Music");
  const handleChange = (e: any) => {
    props.setSelected(e.target.value);
    // console.log(selected);
  };

  const theme = useTheme();
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
      width="20%"
      borderRadius={theme.borderRadius.lg}
      border={`1px solid ${theme.colors.white}`}
      padding={theme.space[4]}
      marginTop={theme.space[4]}
      marginBottom={theme.space[4]}
    >
      <Flex height={"100%"} width={"100%"} align="center" justify="center">
        <Select
          placeholder="Upload Music"
          color={theme.colors.white}
          backgroundColor={theme.colors.bgDark}
          border="none"
          height={"5vh"}
          width={"100%"}
          value={props.selected}
          onChange={handleChange}
        >
          <option value="Record Music" style={styles}>
            Record Music
          </option>
        </Select>
      </Flex>
    </Flex>
  );
};
export default SelectTab;
