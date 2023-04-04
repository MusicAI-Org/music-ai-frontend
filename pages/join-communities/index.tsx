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
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicGroups = (): JSX.Element => {
  const { user } = useAuth0();
  return (
    <>
      <Head>
        <title>Join Communities</title>
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
              <MusicGroupsComponent />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default MusicGroups;
