import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const imageStyles = {
  root: {
    margin: '20px',
    display: 'inline-block',
    maxWidth: 'calc(100% - 40px)',
    maxHeight: '100%',
  },
};
class CustomImage extends React.Component {
  render() {
    const { classes } = this.props;
    return <img alt="complex" src={this.props.src} className={classes.root} />;
  }
}
CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(imageStyles)(CustomImage);
