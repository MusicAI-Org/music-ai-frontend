import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import MusicGroupsComponent from "../../components/Page-Components/MusicGroups";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicGroups = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Join Communities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <MusicGroupsComponent />
        </Container>
      </PageContainer>
    </>
  );
};
export default MusicGroups;
