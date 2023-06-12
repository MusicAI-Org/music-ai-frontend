import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import ProfilePage from "../../components/Page-Components/Profile/Profile";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";
import Credential from "../credentials";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRole from "../create-role";
// /**
//  * Home Page of the Application
//  * @return {JSX.Element}
//  */
const Profile = (): JSX.Element => {
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
        <title>Profile</title>
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
                  <ProfilePage />
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
export default Profile;
