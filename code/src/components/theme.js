// import { createMuiTheme } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#e0e0e0',
      dark: '#aeaeae',
      contrastText: '#000',
    },
    secondary: {
      light: '#b5ffff',
      main: '#81e8dd',
      dark: '#4cb5ab',
      contrastText: '#000',
    },
  },
  typography: {
    // htmlFontSize: 10,
    fontSize: 12,
  },
});
theme = responsiveFontSizes(theme);
const myTheme = theme;

export default myTheme;
