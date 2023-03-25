/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export interface Props {
  children: ReactNode;
  mode: "dark" | "light";
}

const ThemeProvider = ({ children, mode }: Props) => (
  <StyledThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
    {children}
  </StyledThemeProvider>
);

ThemeProvider.defaultProps = {
  mode: "dark",
};

export default ThemeProvider;
export { lightTheme } from "./light";
export { darkTheme } from "./dark";
