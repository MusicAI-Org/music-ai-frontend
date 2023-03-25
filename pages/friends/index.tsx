import React from "react";
import CommunityPage from "../../components/Page-Components/Community/CommunityPage";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Community = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Friends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <CommunityPage />
        </Container>
      </PageContainer>
    </>
  );
};
export default Community;
