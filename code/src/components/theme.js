// import { createMuiTheme } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
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

const myTheme = responsiveFontSizes(defaultTheme);

// const myTheme = {
//   ...defaultTheme,
//   overrides: {
//     MuiTypography: {
//       h1: {
//         fontSize: '5rem',
//         [breakpoints.down('xs')]: {
//           fontSize: '3rem',
//         },
//       },
//     },
//   },
// };

export default myTheme;
