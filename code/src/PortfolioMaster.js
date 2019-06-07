import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/partials/Footer';
import { MasterContent, DetailContent } from './components/content';
import ScrollToTopOnMount from './components/ScrollToTopMount';

// import './PortfolioMaster.css';
class PortfolioMaster extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
        <ScrollToTopOnMount>
          <div className="App">
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
