import React, { Component } from "react";
import PropTypes from "prop-types";

export class RouteRenderer extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  render() {
    return (
      <div>
        {this.context.route === this.props.path
          ? React.createElement(this.props.component)
          : null}
      </div>
    );
  }
}
