import React from "react";
// import {
//   Container,
//   HeaderContainer,
//   PageContainer,
// } from "../../components/Page-Components/Global/styles/styles";
// import StreamingPage from "../../components/Page-Components/Streaming/StreamingPage";
// import Header from "../../components/utils/Header";
// import Helmet from "../../components/utils/Helmet";
import Head from "next/head";
// import { useAuth0 } from "@auth0/auth0-react";
// import Credential from "../credentials";
// import CreateRole from "../create-role";
import UnderDevelopment from "../../components/Page-Components/UnderDev";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Stream = (): JSX.Element => {
  // const { user, isAuthenticated } = useAuth0();

  // let success = false;
  // if (typeof localStorage !== "undefined") {
  //   const localstoredUser = localStorage.getItem("userData");
  //   if (localstoredUser !== null) {
  //     const parsedUser = JSON.parse(localstoredUser);
  //     success = parsedUser.success;
  //   }
  // }
  const isUnderDev = false;
  return (
    <>
      <Head>
        <title>Text to Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isUnderDev && (
        //   <PageContainer>
        //     {user && isAuthenticated ? (
        //       <>
        //         {success ? (
        //           <>
        //             <HeaderContainer>
        //               <Header />
        //             </HeaderContainer>
        //             <Container>
        //               {/* <MusicBar /> */}
        //               <Helmet />
        //               <StreamingPage />
        //             </Container>
        //           </>
        //         ) : (
        //           <CreateRole />
        //         )}
        //       </>
        //     ) : (
        //       <Credential />
        //     )}
        //   </PageContainer>
        // ) : (
        <UnderDevelopment />
      )}
    </>
  );
};
export default Stream;
