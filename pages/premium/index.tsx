import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import PremiumDiv from "../../components/Page-Components/Premium/PremiumDiv";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Premium = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Music.AI Premium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <PremiumDiv />
        </Container>
      </PageContainer>
    </>
  );
};
export default Premium;
