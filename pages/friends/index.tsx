import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";
import FriendsContainer from "../../components/Page-Components/Friends";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Friends = (): JSX.Element => {
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
          <FriendsContainer />
        </Container>
      </PageContainer>
    </>
  );
};
export default Friends;
