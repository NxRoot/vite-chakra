// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

export const color = localStorage.getItem("chakra-ui-color-mode")

// 2. Add your color mode config
const config = {
  initialColorMode: color,
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
})

export default theme