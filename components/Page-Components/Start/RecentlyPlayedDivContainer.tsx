import React from "react";
import { Flex } from "@chakra-ui/react";
import TextContainer from "../../utils/Texts/TextContainer";
import PlayList from "./components/Recents";
// import CustomButton from "../../utils/Buttons/CustomButton";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const RecentlyPlayedDivContainer = () => {
  //   const theme = useTheme();
  return (
    <Flex width={"100%"} height={"50vh"} direction={"column"}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        height={"10vh"}
        paddingRight={"1rem"}
        marginBottom={"0.5rem"}
      >
        <TextContainer text="Recently Played" size="2rem" />
      </Flex>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        width={"100%"}
        height={"90vh"}
        flexWrap={"wrap"}
      >
        <PlayList />
      </Flex>
    </Flex>
  );
};
export default RecentlyPlayedDivContainer;
