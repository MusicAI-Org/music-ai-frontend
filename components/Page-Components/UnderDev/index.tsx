import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../Global/styles/styles";

import Head from "next/head";
import { Flex, Heading, useTheme } from "@chakra-ui/react";
import Header from "../../utils/Header";
import Helmet from "../../utils/Helmet";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
// dummy text for testing here
const UnderDevelopment = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Head>
        {/* community name here */}
        <title>Under Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <Flex
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Heading
              style={{
                color: theme.colors.ci,
                fontSize: "2rem",
              }}
            >
              This feature is under development. Sorry for the inconvenience!
            </Heading>
          </Flex>
        </Container>
      </PageContainer>
    </>
  );
};
export default UnderDevelopment;
