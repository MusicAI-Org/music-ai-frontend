import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import LearnMusic from "../../components/Page-Components/LearnMusic";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicBot = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Learn Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <LearnMusic />
        </Container>
      </PageContainer>
    </>
  );
};
export default MusicBot;
