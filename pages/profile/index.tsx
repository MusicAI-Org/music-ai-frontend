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
// /**
//  * Home Page of the Application
//  * @return {JSX.Element}
//  */
const Profile = (): JSX.Element => {
  const { user } = useAuth0();
  return (
    <>
      <Head>
        <title>Profile</title>
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
              <ProfilePage />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default Profile;
