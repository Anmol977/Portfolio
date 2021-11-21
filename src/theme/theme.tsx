import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const themeColors = {
  light: '#EDF2F7',
  dark: '#20202380'
}

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  }
}

const theme = extendTheme({
  config, fonts: {
    heading: "Noto Mono",
    body: "Noto Mono",
  },
  components
})

export default theme;

