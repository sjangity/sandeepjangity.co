import React, { Component } from "react";
import PropTypes from "prop-types";

export class Link extends Component {
  // this is how a child compoentn can consume context set at higher level in the component tree (eg. <Router level)
  // this should MATCH the childContextTypes object specified in the <Router level
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  handleClick = e => {
    console.log("click detected");
    e.preventDefault();

    // pushState is already handled by link handler in Router component, so remove logic here to decouple components
    // window.history.pushState(null, '', this.props.to);

    // calls the linkHandler context types inherited in the component tree from <Router>
    this.context.linkHandler(this.props.to);
  };
  render() {
    const activeClass = this.context.route === this.props.to ? "active" : "";
    return (
      <a href="#" className={activeClass} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};
