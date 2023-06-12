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
import CreateRole from "./create-role";
// import MusicBar from "../components/Page-Components/Global/components/MusicBar";

// import Start from "./start";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

export default function Index(): JSX.Element {
  const { user, isAuthenticated } = useAuth0();

  let success = false;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      success = parsedUser.success;
    }
  }

  return (
    <>
      <Head>
        <title>Music.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {user && isAuthenticated ? (
          <>
            {success ? (
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
              <CreateRole />
            )}
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
}
