import React from "react";
import dynamic from "next/dynamic";
import { Flex, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const CommunityPage = (): JSX.Element => {
  const theme = useTheme();

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
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          showAtmosphere
          atmosphereAltitude={0.25}
          atmosphereColor={theme.colors.gray[500]}
        />
      </Flex>
    </StyledContainer>
  );
};
export default CommunityPage;
