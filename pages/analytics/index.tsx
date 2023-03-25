import React from "react";
import Analytic from "../../components/Page-Components/Analytics";
import {
  Container,
  HeaderContainer,
  PageContainer,
} from "../../components/Page-Components/Global/styles/styles";
import Header from "../../components/utils/Header";
import Helmet from "../../components/utils/Helmet";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
// dummy text for testing here
const Analytics = (): JSX.Element => {
  return (
    <PageContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Helmet />
        <Analytic />
      </Container>
    </PageContainer>
  );
};
export default Analytics;
