import React, { Component } from 'react';
import PropTypes from 'prop-types';

// we need a way to query the current path that the app is in on all our components
const getCurrentPath = () => {
  const path = document.location.pathname;
  console.log(path);
  return path.substring(path.lastIndexOf('/'));
};

// new context api
export const RouteContext = React.createContext({
  route: false,
  linkHandler: () => {},
});

class Router extends Component {
  // property initializer syntax
  state = {
    route: getCurrentPath(),
  };

  // track routes clicked by user throughout app so that all child components can
  // access this when needed
  handleLinkClick = (route) => {
    console.log('handle click');
    this.setState({
      route,
    });
    window.history.pushState(null, '', route);
  };

  // DEPRECATED
  // // context type for accessibility in other areas of the component tree
  // // define the context types and then create an accessor method that wll allow us
  // // to get the values out of this component
  // static childContextTypes = {
  //   route: PropTypes.string,
  //   linkHandler: PropTypes.func,
  // };
  // getChildContext = () => ({
  //   route: this.state.route,
  //   linkHandler: this.handleLinkClick,
  // });

  componentDidMount() {
    console.log('Router did mount');
    // this event is fired whneever we use the browsers back button
    window.onpopstate = () => {
      console.log('on popstate');
      this.setState({ route: getCurrentPath() });
    };
  }

  render() {
    return (
      <div>
        {/* the main app <App /> is being added to Router comoponent using this.props.children */}
        <RouteContext.Provider
          value={{ route: this.state.route, linkHandler: this.handleLinkClick }}
        >
          {this.props.children}
        </RouteContext.Provider>
      </div>
    );
  }
}

Router.propTypes = {
  children: PropTypes.any,
};

export default Router;
