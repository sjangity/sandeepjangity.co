import React from 'react';
// import PropTypes from "prop-types";

import Link from '../router/Link';

class MasterContent extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <section className="PanelHero Centered" id="hero">
          <h1>
            <span className="HeroPic">profile pic</span>
            <span>Building products people want is hard, really hard.</span>
          </h1>
          <span>
            <h2>
              Hiring teams that can incrementally deliver value is equally hard.
            </h2>
          </span>
          <h3>
            My mission is to master the{' '}
            <Link to="/detail">Zen of Product Development</Link>
          </h3>
        </section>

        <section className="PanelHero Centered">
          <h2>
            0 marketing, 2-month launch cycles, 50K registered conversions on
            products I’ve conceived is a noteable accomplishment; however....
          </h2>
        </section>

        <section className="PanelHero Centered">
          <h2>I BLOG</h2>
        </section>

        <section className="PanelHero Centered">
          <h2>I SHARE</h2>
        </section>

        <section className="PanelHero Centered">
          <h2>I continue to build learn & Innovate</h2>
        </section>
      </div>
    );
  }
}

export default MasterContent;
