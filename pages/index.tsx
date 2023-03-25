/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import React from "react";
import { useTheme } from "styled-components";
import Head from "next/head";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../components/Page-Components/Global/styles/styles";
import Header from "../components/utils/Header";
import Start from "./start";
import Helmet from "../components/utils/Helmet";
import MusicBar from "../components/Page-Components/Global/components/MusicBar";

// import Start from "./start";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

export default function Index(): JSX.Element {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Head>
        <title>Music.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <MusicBar />
          <Helmet />
          <Start />
        </Container>
      </PageContainer>
    </>
  );
}
