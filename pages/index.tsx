/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import React, { useEffect } from "react";
import Head from "next/head";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../components/Page-Components/Global/styles/styles";
import Header from "../components/utils/Header";
import Start from "./start";
import Helmet from "../components/utils/Helmet";
import { useAuth0 } from "@auth0/auth0-react";
import Credential from "./credentials";
import CreateRole from "./create-role";
import useUser from "../swr/user/useUser";

const AuthenticatedContent = () => {
  const { user } = useAuth0();
  const { user: model, isLoading, error } = useUser({
    email: user?.email || "",
  });
  // console.log("mmooo", model);

  useEffect(() => {
    if (!isLoading && !error && model) {
      // Save the user data in local storage
      const userData = model;
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [isLoading, error, model]);

  let success = false;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      success = parsedUser.success;
    }
  }

  if (success) {
    return (
      <>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Container>
          <Helmet />
          <Start />
        </Container>
      </>
    );
  } else {
    return <CreateRole />;
  }
};

export default function Index(): JSX.Element {
  const { user } = useAuth0();
  console.log("isis", user);
  return (
    <>
      <Head>
        <title>Music.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {user ? <AuthenticatedContent /> : <Credential />}
      </PageContainer>
    </>
  );
}
