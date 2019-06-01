import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "../router";

export class DetailContent extends Component {
  render() {
    return (
      <div>
        <section className="PanelHero Centered" id="hero">
          <div className="HeroProfile" />
          <div>
            <h1>
              <span>
                HIRE ME AND LET’S ZEN TOGETHER. I AM OPEN AN AVAILABLE.
              </span>
            </h1>
          </div>

          <h3>
            <Link to="/">See what I have done</Link>
          </h3>
        </section>

        <section className="PanelHero Centered">
          <h2>This is what I am thinking of these days</h2>
        </section>

        <section className="PanelHero Centered">
          <h2>WHAT I’VE BUILT AS A WEB & MOBILE ENGINEER</h2>
        </section>
      </div>
    );
  }
}
