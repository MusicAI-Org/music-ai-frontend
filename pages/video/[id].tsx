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
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";
import VideoStream from "../../components/Page-Components/Video";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const VideoPage = (): JSX.Element => {
  const { user } = useAuth0();
  const { query } = useRouter();
  console.log(query.id);
  return (
    <>
      <Head>
        {/* community name here */}
        <title>{query.name}</title>
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
              <VideoStream id={query.id} />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default VideoPage;
