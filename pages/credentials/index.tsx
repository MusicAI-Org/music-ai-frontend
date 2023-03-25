import React from "react";
import {
  Credentials,
  CredentialsContainer,
  ImageCarousal,
  LoginContainer,
  PageContainer,
  // RegisterContainer,
} from "../../components/Page-Components/Global/styles/styles";
import LoginButton from "../../components/utils/Buttons/LoginButton";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Credential = (): JSX.Element => {
  // const [state, setstate] = useState(false);
  return (
    <PageContainer>
      <Credentials>
        <CredentialsContainer>
          <ImageCarousal>
            <LoginButton />
          </ImageCarousal>
          <LoginContainer></LoginContainer>
          {/* {state && <RegisterContainer></RegisterContainer>} */}
        </CredentialsContainer>
      </Credentials>
    </PageContainer>
  );
};
export default Credential;
