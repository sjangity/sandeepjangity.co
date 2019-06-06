import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/partials/Footer';
import { MasterContent, DetailContent } from './components/content';
// import RouteRenderer from './components/router/RouteRenderer';
// import Typography from '@material-ui/core/Typography';
import ScrollToTopOnMount from './components/ScrollToTopMount';

// import './PortfolioMaster.css';
class PortfolioMaster extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <ScrollToTopOnMount>
          <div className="App">
            {/* <Container maxWidth="sm" component="main">
            <Typography
              variant="h7"
              color="textSecondary"
              component="p"
              style={{ textTransform: 'uppercase' }}
            >
              11 years living, breathing startups as a FULL STACK ENGINEER.
            </Typography>
          </Container> */}

            <Route path="/" exact component={MasterContent} />
            <Route path="/portfolio" component={DetailContent} />

            <Footer />
          </div>
        </ScrollToTopOnMount>
      </Router>
    );
  }
}

const hotFunction = hot(module); // returns a function
export default hotFunction(PortfolioMaster);
