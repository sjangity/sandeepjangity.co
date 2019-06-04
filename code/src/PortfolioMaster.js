import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Footer from './components/partials/Footer';
import RouteRenderer from './components/router/RouteRenderer';
import { MasterContent, DetailContent } from './components/content';

// import './PortfolioMaster.css';
class PortfolioMaster extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm" component="main">
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            11 years living, breathing startups as an ENGINEER.
          </Typography>
        </Container>

        {/* <header className="Header Centered">
          <h3>8 years as a web, mobile engineer at startups. Hire me.</h3>
        </header> */}

        {/* let's specify some dyanmic routes */}
        <RouteRenderer path="/" component={MasterContent} />
        <RouteRenderer path="/detail" component={DetailContent} />

        <Footer />
      </div>
    );
  }
}

const hotFunction = hot(module); // returns a function
export default hotFunction(PortfolioMaster);
