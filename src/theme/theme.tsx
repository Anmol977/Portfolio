import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export default {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      700: "#2D3748",
    },
    red: {
      500: '#E53E3E'
    }
  },

}
export const themeColors = {
  light: '#EDF2F7',
  dark: '#20202380'
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config, fonts: {
    heading: "Noto Mono",
    body: "Noto Mono",
  },
})

