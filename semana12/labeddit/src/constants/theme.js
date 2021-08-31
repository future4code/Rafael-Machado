import { createTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor, secondaryColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: secondaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme 