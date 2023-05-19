import React from "react";
import { Button, Flex, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Start/styles/pageStyles";
import Footer from "../../utils/Footer/Footer";
import Link from "next/link";

// import TextContainer from "../../utils/Texts/TextContainer";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

type Props = {
  id?: any;
  name?: string;
};

const VideoStream = ({ id }: Props): JSX.Element => {
  const theme = useTheme();

  const style = {
    height: "5%",
    width: "20%",
    fontSize: theme.fontSizes.h4,
    background: theme.colors.transparent,
    marginBottom: "2vh",
  };
  return (
    <StyledContainer color="">
      <Flex
        height={"100vh"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"flex-end"}
        justifyContent={"flex-start"}
        padding={theme.space[4]}
      >
        <Link
          href={{
            pathname: `/`,
          }}
        >
          <Button style={style}>Back</Button>
        </Link>
        <Flex
          height={"80%"}
          width={"100%"}
          alignItems={"flex-start"}
          justifyContent={"center"}
          paddingRight={theme.space[4]}
        >
          <iframe
            width="90%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
          ></iframe>
        </Flex>
      </Flex>
      {/* <TextContainer text={name} size={theme.fontSizes.xl} /> */}
      <Footer />
    </StyledContainer>
  );
};
export default VideoStream;
