import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import StreamingPage from "../../components/Page-Components/Streaming/StreamingPage";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Stream = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Now Streaming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <StreamingPage />
        </Container>
      </PageContainer>
    </>
  );
};
export default Stream;
