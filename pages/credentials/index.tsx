import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import ImageCarousal from "../../components/Page-Components/Credentials";
import {
  Credentials,
  CredentialsContainer,
  LoginSignupContainer,
  PageContainer,
  // RegisterContainer,
} from "../../components/Page-Components/Global/styles/styles";
import LoginButton from "../../components/utils/Buttons/LoginButton";
import SignUpButton from "../../components/utils/Buttons/SignUpButton";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Credential = (): JSX.Element => {
  const theme = useTheme();
  const style = {
    color: theme.colors.ci,
    fontSize: theme.fontSizes.h3,
  };
  return (
    <PageContainer>
      <Credentials>
        <CredentialsContainer>
          <ImageCarousal />
          <LoginSignupContainer>
            <Flex direction="column" height="fit-content" width="90%">
              <Text style={style}>Have an account?</Text>
              <LoginButton />
            </Flex>
            <Flex direction="column" height="fit-content" width="90%">
              <Text style={style}>Create a New Account</Text>
              <SignUpButton />
            </Flex>
          </LoginSignupContainer>
        </CredentialsContainer>
      </Credentials>
    </PageContainer>
  );
};
export default Credential;
