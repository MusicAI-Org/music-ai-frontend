/* eslint-disable require-jsdoc */
import { Flex, useTheme } from "@chakra-ui/react";
import * as React from "react";
import TextContainer from "../../../../utils/Texts/TextContainer";
import FavList from "./FavList";

const FavouriteArtists = () => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height="46vh"
      width="85%"
      margin={"0 auto"}
      borderRadius="10px"
      padding={`${theme.space[1]} ${theme.space[3]}`}
    >
      <TextContainer text="Fav Artists" size="2rem" />
      <FavList />
    </Flex>
  );
};

export default FavouriteArtists;
