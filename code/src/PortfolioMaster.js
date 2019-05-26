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
        <section className="Centered">
          <h3>8 years as a web, mobile engineer at startups. Hire me.</h3>
        </section>

        {/* let's specify some dyanmic routes */}
        <RouteRenderer path="/" component={MasterContent} />
        <RouteRenderer path="/detail" component={DetailContent} />

        <section className="Centered" id="footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default PortfolioMaster;
