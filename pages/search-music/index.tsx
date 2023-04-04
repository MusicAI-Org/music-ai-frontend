import React from "react";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import SearchMusic from "../../components/Page-Components/SearchMusic";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "../credentials";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const SearchFriends = (): JSX.Element => {
  const { user } = useAuth0();
  return (
    <>
      <Head>
        <title>Search Music</title>
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
              <SearchMusic />
            </Container>
          </>
        ) : (
          <Credential />
        )}
      </PageContainer>
    </>
  );
};
export default SearchFriends;
