import React, { Component } from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "./components/partials";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="Centered">
          <h3>8 years as a web, mobile engineer at startups. Hire me.</h3>
        </section>

        <section className="PanelHero Centered" id="hero">
          <h1>
            <span>Building products people want is hard, really hard.</span>
          </h1>
          <span>
            <h2>
              Hiring teams that can incrementally deliver value is equally hard.
            </h2>
          </span>
          <h3>
            My mission is to master the{" "}
            <a href="/">Zen of Product Development</a>
          </h3>
        </section>

        <section className="Centered">
          <h2>
            0 marketing, 2-month launch cycles, 50K registered conversions on
            products I’ve conceived is a noteable accomplishment; however....
          </h2>
        </section>

        <section className="Centered">
          <h2>I BLOG</h2>
        </section>

        <section className="Centered">
          <h2>I SHARE</h2>
        </section>

        <section className="Centered">
          <h2>I continue to build learn & Innovate</h2>
        </section>

        <section className="Centered" id="footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
