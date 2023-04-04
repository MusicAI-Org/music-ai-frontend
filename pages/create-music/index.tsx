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
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const CreateMusic = (): JSX.Element => {
  const { user } = useAuth0();
  return (
    <>
      <Head>
        <title>Create Your Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {user ? (
          <>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <Container>
              <Helmet />
              <Create />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default CreateMusic;
