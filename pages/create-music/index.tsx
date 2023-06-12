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
import CreateRole from "../create-role";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const CreateMusic = (): JSX.Element => {
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
        <title>Create Your Music</title>
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
                  <Create />
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
export default CreateMusic;
