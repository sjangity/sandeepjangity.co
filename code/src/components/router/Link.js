import React from 'react';
import PropTypes from 'prop-types';

import { RouteContext } from './Router';

class Link extends React.Component {
  // // this is how a child compoentn can consume context set at higher level in the
  // // component tree(eg. <Router level)
  // // this should MATCH the childContextTypes object specified in the <Router level
  // static contextTypes = {
  //   route: PropTypes.string,
  //   linkHandler: PropTypes.func,
  // };

  handleClick = (e) => {
    console.log('click detected');
    e.preventDefault();

    // pushState is already handled by link handler in Router component, so
    // remove logic here to decouple components
    // window.history.pushState(null, '', this.props.to);
    // debugger;
    // calls the linkHandler context types inherited in the component tree from <Router>
    this.context.linkHandler(this.props.to);
  };

  render() {
    // const activeClass = this.context.route === this.props.to ? 'active' : '';
    return (
      <RouteContext.Consumer>
        {(contextValue) => (
          <button
            href="#"
            className={contextValue.route === this.props.to ? 'active' : ''}
            onClick={this.handleClick}
          >
            {this.props.children}
          </button>
        )}
      </RouteContext.Consumer>
    );
  }
}

Link.contextType = RouteContext;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Link;
