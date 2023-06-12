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
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";
import CreateRole from "../create-role";
import useParticularCommunity from "../../swr/community/useParticularCommunity";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const MusicGroups = (): JSX.Element => {
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
  console.log(query.id);

  const particularCommunityData = useParticularCommunity({ _id: query.id });
  // console.log("particular comm ", particularCommunityData);
  return (
    <>
      <Head>
        {/* community name here */}
        <title>Join Communities</title>
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
                  <CommunityPage
                    particularCommunityData={particularCommunityData}
                  />
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
export default MusicGroups;
