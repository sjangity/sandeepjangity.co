import React from 'react';
import ReactDOM from 'react-dom';

// Materia-UI / styled-components
// import { ThemeProvider } from 'styled-components';
// import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import { ThemeProvider } from '@material-ui/styles';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

import theme from './components/theme';

import PortfolioMaster from './PortfolioMaster';
import DefaultErrorBoundary from './DefaultErrorBoundary';
// import Router from './components/router/Router';

// NODE_ENV is available through webpack build process and which mode is set
// Look for accessibility violations in rendered DOM
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  // <App is now the child of the <Router component
  <React.StrictMode>
    <DefaultErrorBoundary>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <PortfolioMaster />
        </ThemeProvider>
      </NoSsr>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
