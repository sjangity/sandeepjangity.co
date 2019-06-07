import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Paper, Grid } from '@material-ui/core';
import theme from '../../theme';

const sectionStyles = {
  paper: {
    padding: '3em 0 4.5em',
    elevation: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    '&:nth-child(even)': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  paperSpecial: {
    padding: '3em 0 4.5em',
    elevation: 0,
    textAlign: 'center',
  },
};
class SectionPanel extends React.Component {
  render() {
    const { classes } = this.props;
    const isGray = !!this.props.isGray;
    return (
      <React.Fragment>
        <Paper
          elevation={0}
          className={classes.paper}
          style={isGray ? { background: '#fff' } : {}}
        >
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
              {this.props.children}
            </Grid>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}
SectionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
  isSpecial: PropTypes.bool,
  isGray: PropTypes.bool,
};

export default withStyles(sectionStyles)(SectionPanel);
