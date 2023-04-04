/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import React from "react";
import Head from "next/head";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../components/Page-Components/Global/styles/styles";
import Header from "../components/utils/Header";
import Start from "./start";
import Helmet from "../components/utils/Helmet";
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "./credentials";
// import MusicBar from "../components/Page-Components/Global/components/MusicBar";

// import Start from "./start";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

export default function Index(): JSX.Element {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      <Head>
        <title>Music.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {user ? (
          <>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <Container>
              {/* <MusicBar /> */}
              <Helmet />
              <Start />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
}
