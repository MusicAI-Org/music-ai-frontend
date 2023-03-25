import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import TextContainer from "../../utils/Texts/TextContainer";
import PlayList from "./components/PlaylistCards";
import CustomButton from "../../utils/Buttons/CustomButton";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const PlaylistDivContainer = () => {
  const theme = useTheme();
  return (
    <Flex
      width={"100%"}
      height={"50vh"}
      direction={"column"}
      marginBottom={theme.space[5]}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-around"}
        width={"100%"}
        height={"10vh"}
        paddingRight={"1rem"}
        marginBottom={"0.5rem"}
      >
        <TextContainer text="Playlists" size="2rem" />
        <CustomButton text="See More" justifyContent="flex-end" />
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"flex-start"}
        width={"100%"}
        height={"90vh"}
      >
        <PlayList />
      </Flex>
    </Flex>
  );
};
export default PlaylistDivContainer;
