import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RouteContext } from './Router';

class RouteRenderer extends Component {
  // static contextTypes = {
  //   route: PropTypes.string,
  //   linkHandler: PropTypes.func,
  // };

  render() {
    // debugger;
    return (
      <RouteContext.Consumer>
        {(contextValue) => (
          <div>
            {contextValue.route === this.props.path
              ? React.createElement(this.props.component)
              : null}
          </div>
        )}
      </RouteContext.Consumer>
    );
  }
}

RouteRenderer.propTypes = {
  path: PropTypes.any,
  component: PropTypes.any,
  children: PropTypes.any,
};

export default RouteRenderer;
