import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/partials/Footer';
// import RouteRenderer from './components/router/RouteRenderer';
import { MasterContent, DetailContent } from './components/content';

// import './PortfolioMaster.css';
class PortfolioMaster extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <div className="App">
          <Container maxWidth="sm" component="main">
            <Typography variant="h6" color="textSecondary" component="p">
              11 years living, breathing startups as a FULL STACK ENGINEER.
            </Typography>
          </Container>

          <Route path="/" exact component={MasterContent} />
          <Route path="/detail" component={DetailContent} />

          {/* <RouteRenderer path="/" component={MasterContent} />
          <RouteRenderer path="/detail" component={DetailContent} /> */}

          <Footer />
        </div>
      </Router>
    );
  }
}

const hotFunction = hot(module); // returns a function
export default hotFunction(PortfolioMaster);
