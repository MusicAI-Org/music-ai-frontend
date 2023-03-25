import React from "react";
import Create from "../../components/Page-Components/CreateMusic";
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
const CreateMusic = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Your Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <Create />
        </Container>
      </PageContainer>
    </>
  );
};
export default CreateMusic;
