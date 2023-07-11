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
import CreateRole from "../create-role";
import useRandomUser from "../../swr/user/useRandomUser";
import ViewProfileUtil from "../../components/Page-Components/ViewProfile";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const ViewProfile = (): JSX.Element => {
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

  const particularUser = useRandomUser({ id: query.id });
  console.log("particular user ", particularUser);
  const avatarName = particularUser?.data?.randomUser?.avatarName;
  return (
    <>
      <Head>
        {/* community name here */}
        <title>{avatarName}</title>
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
                  <ViewProfileUtil
                    particularUser={particularUser?.data?.randomUser}
                    // isFollowing={particularUser?.data?.randomUser?.followers.includes(
                    //   _id
                    // )}
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
export default ViewProfile;
