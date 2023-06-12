import React from "react";
import Analytic from "../../components/Page-Components/Analytics";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
import { useAuth0 } from "@auth0/auth0-react";
import CreateRole from "../create-role";
import Credential from "../credentials";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
// dummy text for testing here
const Analytics = (): JSX.Element => {
  const { user, isAuthenticated } = useAuth0();

  let success = false;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      success = parsedUser.success;
    }
  }
  return (
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
                <Analytic />
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
  );
};
export default Analytics;
