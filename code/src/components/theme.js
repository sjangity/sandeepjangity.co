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
      light: '#8afff5',
      main: '#50E3C2',
      dark: '#00b092',
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
