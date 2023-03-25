import React from "react";
import ContentDivContainer from "../../components/Page-Components/Start/ContentDivContainer";
import { Flex, useTheme } from "@chakra-ui/react";
import PanelDivContainer from "../../components/Page-Components/Start/PanelDivContainer";
import { StyledContainer } from "../../components/Page-Components/Start/styles/pageStyles";
import Footer from "../../components/utils/Footer/Footer";
import PlaylistDivContainer from "../../components/Page-Components/Start/PlaylistDivContainer";
import RecentlyPlayedDivContainer from "../../components/Page-Components/Start/RecentlyPlayedDivContainer";
import UpgradeFavArtists from "../../components/Page-Components/Start/UpgradeFavArtists";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
type Props = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

const Start = (props: Props) => {
  const theme = useTheme();
  return (
    <StyledContainer color="">
      <Flex
        alignItems="flex-start"
        justifyContent="flex-start"
        width={"100%"}
        height={"100vh"}
      >
        <ContentDivContainer />
        <PanelDivContainer />
      </Flex>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        width={"100%"}
        height={"100vh"}
        backgroundColor={theme.colors.bgDark}
      >
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          width={"70%"}
          height={"100vh"}
        >
          <PlaylistDivContainer />
          <RecentlyPlayedDivContainer />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          width={"30%"}
          height={"100vh"}
        >
          <UpgradeFavArtists />
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default Start;
