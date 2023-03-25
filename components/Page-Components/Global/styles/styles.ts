import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 0 0rem 0 1rem;
  position: relative;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
`;

export const StyledContainer = styled.div<{ color: string }>`
  height: 90vh;
  width: 100%;
  flexdirection: column;
  alignitems: center;
  justifycontent: flex-start;
  backgroundcolor: ${(props) => props.color || "white"};
  overflow-y: scroll;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
  position: relative;
`;

export const HeaderContainer = styled.div`
  width: fit-content;
  margin-right: 1rem;
  position: relative;
  z-index: 19999;
`;

export const MusicBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 15vh;
  position: absolute;
  bottom: 0;
  margin: 10px;
  z-index: 1999;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.color.errorNotification};
`;

export const Credentials = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CredentialsContainer = styled.div`
  height: 75vh;
  width: 65vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: rgba(255, 255, 255, 0.09);
  border: 2px solid ${({ theme }) => theme.color.ci};
`;

export const ImageCarousal = styled.div`
  height: 100%;
  width: 45%;
  background-color: ${({ theme }) => theme.color.bgBox};
`;
export const LoginContainer = styled.div`
  height: 100%;
  width: 55%;
  background-color: ${({ theme }) => theme.color.dangerBg};
`;

export const RegisterContainer = styled.div`
  height: 100%;
  width: 55%;
  background-color: ${({ theme }) => theme.color.ci};
`;
