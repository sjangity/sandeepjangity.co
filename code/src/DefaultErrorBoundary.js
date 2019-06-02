import React from 'react';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false,
  };

  // this lifecycle method is called during "render" phase to catch errors thrown in component tree
  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>Something is wrong</div> : children;
  }
}

DefaultErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultErrorBoundary;
