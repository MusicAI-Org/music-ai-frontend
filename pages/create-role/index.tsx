import React from "react";
// import Create from "../../components/Page-Components/CreateMusic";
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
import CreateRoleContainer from "../../components/Page-Components/CreateRole";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const CreateRole = (): JSX.Element => {
  const { user } = useAuth0();
  return (
    <>
      <Head>
        <title>Create Role</title>
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
              <CreateRoleContainer />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default CreateRole;
