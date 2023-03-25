import React from "react";
import { Flex } from "@chakra-ui/react";
import Upgrade from "./components/Upgrade";
import FavouriteArtists from "./components/FavouriteArtists/FavouriteArtists";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const UpgradeFavArtists = () => {
  // const theme = useTheme();
  return (
    <Flex width={"97%"} height={"100vh"} direction={"column"}>
      <Upgrade />
      <FavouriteArtists />
    </Flex>
  );
};
export default UpgradeFavArtists;
