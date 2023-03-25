import React from "react";
import { Flex } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
// import Globe from "react-globe.gl";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const CommunityPage = (): JSX.Element => {
  // const theme = useTheme();

  return (
    <StyledContainer color="">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
      >
        {/* <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          showAtmosphere
          atmosphereAltitude={0.25}
          atmosphereColor={theme.colors.gray[500]}
        /> */}
      </Flex>
    </StyledContainer>
  );
};
export default CommunityPage;
