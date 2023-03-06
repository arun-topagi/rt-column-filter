import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

const MyThemeProvider = ({ theme, children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </StylesProvider>
);

export default MyThemeProvider;
