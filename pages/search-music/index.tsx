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

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const SearchFriends = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Search Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <SearchMusic />
        </Container>
      </PageContainer>
    </>
  );
};
export default SearchFriends;
