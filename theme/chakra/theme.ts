import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Overwritten properties
import { colors } from "../base/color";
import { borderRadius } from "../base/borderRadius";
import { spacing as space } from "../base/spacing";
import { fontSize as fontSizes } from "../base/fontSize";
import { fontFamily } from "../base/fontFamily";
import { fontWeight as fontWeights } from "../base/fontWeight";
import { lineHeight as lineHeights } from "../base/lineHeight";
import { breakpoints } from "../base/breakpoints";
import { shadows } from "../base/shadows";
import { globalStyles as styles } from "./styles";
import {
  Button,
  Input,
  Tabs,
  NumberInput,
  Tag,
  Heading,
  Container,
  Skeleton,
} from "./components";

const config: ThemeConfig = {
  initialColorMode: "dark",
  cssVarPrefix: "music.ai",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  breakpoints,
  colors,
  borderRadius,
  fontSizes,
  fontFamily,
  fontWeights,
  lineHeights,
  space,
  shadows,
  components: {
    Button,
    Input,
    NumberInput,
    Tabs,
    Tag,
    Heading,
    Container,
    Skeleton,
  },
});

export default theme;
