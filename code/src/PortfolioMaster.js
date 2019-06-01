import React, { Component } from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "./components/partials";
import { Link, RouteRenderer } from "./components/router";

import { MasterContent, DetailContent } from "./components/content";

import "./PortfolioMaster.css";

class PortfolioMaster extends Component {
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

export default PortfolioMaster;
