import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Footer from './components/partials/Footer';
import RouteRenderer from './components/router/RouteRenderer';
import { MasterContent, DetailContent } from './components/content';

// import './PortfolioMaster.css';

class PortfolioMaster extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <header className="Header Centered">
          <h3>8 years as a web, mobile engineer at startups. Hire me.</h3>
        </header>

        {/* let's specify some dyanmic routes */}
        <RouteRenderer path="/" component={MasterContent} />
        <RouteRenderer path="/detail" component={DetailContent} />

        <footer className="Centered" id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

const hotFunction = hot(module); // returns a function
export default hotFunction(PortfolioMaster);
