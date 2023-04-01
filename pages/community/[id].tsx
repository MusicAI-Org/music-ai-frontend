import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import CommunityPage from "../../components/Page-Components/Community/CommunityPage";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicGroups = (): JSX.Element => {
  const { query } = useRouter();
  console.log(query.id);
  return (
    <>
      <Head>
        {/* community name here */}
        <title>Join Communities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <CommunityPage />
        </Container>
      </PageContainer>
    </>
  );
};
export default MusicGroups;
