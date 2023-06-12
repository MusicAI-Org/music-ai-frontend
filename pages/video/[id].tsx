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
import CreateRole from "../create-role";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const VideoPage = (): JSX.Element => {
  const { user, isAuthenticated } = useAuth0();

  let success = false;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      success = parsedUser.success;
    }
  }
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <Head>
        {/* community name here */}
        <title>{query.name}</title>
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
                  <VideoStream id={query.id} name={query.name} />
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
export default VideoPage;
