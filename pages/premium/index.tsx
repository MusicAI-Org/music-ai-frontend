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
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";
import CreateRole from "../create-role";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Premium = (): JSX.Element => {
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
        <title>Music.AI Premium</title>
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
                  <PremiumDiv />
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
};
export default Premium;
