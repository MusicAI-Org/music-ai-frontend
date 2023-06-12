import React, { useEffect } from "react";
import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraThemeProvider } from "../theme/chakra";

import "../styles/globals.css";
import "../styles/Slider.css";
import ThemeProvider from "../theme";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const win = typeof window !== "undefined" ? window.location.origin : "";
  // const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
  useEffect(() => {
    // Remove the server-side injected CSS.

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  <Head>
    <title>Music.AI</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="icon" href="./favicon.png" />
  </Head>;
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: win,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ChakraThemeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraThemeProvider>
    </Auth0Provider>
  );
};

export default App;
