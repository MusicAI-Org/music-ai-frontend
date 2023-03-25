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
// /**
//  * Home Page of the Application
//  * @return {JSX.Element}
//  */
const Profile = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <ProfilePage />
        </Container>
      </PageContainer>
    </>
  );
};
export default Profile;
