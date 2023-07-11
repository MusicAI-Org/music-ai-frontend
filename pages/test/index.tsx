import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRole from "../create-role";
import Credential from "../credentials";
import Head from "next/head";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
// dummy text for testing here
const Test = (): JSX.Element => {
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
        {/* community name here */}
        <title>Testing</title>
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
                  <Helmet />
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
export default Test;
