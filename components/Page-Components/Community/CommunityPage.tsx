import React from "react";
import { Flex } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";

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
      ></Flex>
    </StyledContainer>
  );
};
export default CommunityPage;
