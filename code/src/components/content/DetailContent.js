import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Link as MuiLink,
  // useMediaQuery,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import MediaQuery from 'react-responsive';
import ImageHOC from '../composition/hoc/ImageHOC';
import theme from '../theme';
import SectionHOC from '../composition/hoc/SectionHOC';
import ProfileCardList from '../composition/hooks/ProfileCardList';

const detailStyles = {
  hero: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '30px 0',
    // height: '75vh',
  },
  containerThink: {
    display: 'flex',
    // height: '250px',
    textAlign: 'center',
    flexWrap: 'wrap',
    '& > .box': {
      flex: 1,
      [theme.breakpoints.up('sm')]: {
        flexBasis: '200px',
      },
      [theme.breakpoints.down('sm')]: {
        flexBasis: '150px',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .boxThinking': {
      background: theme.palette.primary.main,
      flexGrow: 3,
      maxWidth: '100%',
    },
    '& .boxModern': {
      background: theme.palette.secondary.main,
    },
    '& .boxProcess': {
      background: '#F8E81C',
    },
    '& .boxDesign': {
      background: '#F6A623',
    },
    '& .boxTech': {
      // textAlign: 'right',
      width: 800,
      // border: '10px solid green',
    },
  },
  pitchGrid: {
    display: 'flex',
    alignItems: 'center',
    margin: '50px 0',
    '& > *': {
      flexGrow: 1,
    },
  },
  pitchGridItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pitchGridItemResume: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cta: {
    background: theme.palette.secondary.main,
    borderRadius: 3,
    // width: 500,
    fontSize: '1.5em',
    lineHeight: 1.75,
    padding: '36px',
    border: 0,
    color: theme.palette.secondary.contrastText,
    // height: 48,
    '&:hover': {
      textDecoration: 'none',
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
  },
  portLink: {
    padding: '1em 0',
    display: 'block',
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    textShadow: '0 1px 0 #EDEDED',
    textDecoration: 'none',
    position: 'absolute',
    top: '40px',
    left: '20px',
    width: '250px',
    transformOrigin: '0 0',
    transform:
      'rotate(-45deg) translate(-102px, 22px)' /* Firefox 16+, Opera 12.50+ */,
    background: theme.palette.primary.main,
  },
  projectGrid: {
    display: 'flex',
    height: 80,
    alignItems: 'flex-end',
    '& > *': {
      flexGrow: 1,
    },
  },
};

class DetailContent extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SectionHOC isGray={1}>
          <Grid container alignItems="center" spacing={0}>
            <Grid item xs={12} style={{ marginTop: 120 }}>
              <Typography variant="h1" gutterBottom>
                I BUILD FRONT-END AND BACKEND SYSTEMS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" color="textSecondary" gutterBottom>
                with deep empathy for users
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                and growth-driven products
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Link
                to="/"
                component={RouterLink}
                classes={{
                  root: classes.portLink, // class name, e.g. `classes-nesting-root-x`
                }}
              >
                Home
              </Link>
              <Box>
                <MuiLink href="/">
                  <ImageHOC src="/images/profile2.png" />
                </MuiLink>
                <Typography variant="h4" color="textSecondary" component="p">
                  Sandeep Jangity
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3}>
              <MuiLink href="https://github.com/sjangity" target="_">
                <ImageHOC src="/images/gh-icon.png" />
              </MuiLink>
            </Grid>
            <Grid item xs={4} sm={3}>
              <MuiLink
                href="https://stackoverflow.com/users/story/11091758"
                target="_"
              >
                <ImageHOC src="/images/so-icon.png" />
              </MuiLink>
            </Grid>
            <Grid item xs={4} sm={3}>
              <MuiLink
                href={'https://www.linkedin.com/in/sjangity/'}
                target="_"
              >
                <ImageHOC src="/images/li-icon.png" />
              </MuiLink>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                href="http://bit.ly/sandeep-jangity-resume-latest"
                className={classes.cta}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </SectionHOC>
        <SectionHOC isGray={1}>
          <div className={classes.containerThink}>
            <div className="box boxThinking">
              <Typography variant="h5">
                This is what I am thinking of these days
              </Typography>
              <img alt="test" src="/images/brain-icon.png" />
            </div>
            <div className="box boxModern">
              <div>
                <Typography variant="h5">modern web</Typography>
              </div>
            </div>
            <div className="box boxProcess">
              <div>
                <Typography variant="h5">timeless process</Typography>
              </div>
            </div>
            <div className="box boxDesign">
              <div>
                <Typography variant="h5">timeless design</Typography>
              </div>
            </div>
            <MediaQuery minDeviceWidth={1000}>
              <div className="box boxTech">
                <ImageHOC src="/images/stacks.png" />
              </div>
            </MediaQuery>
          </div>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h4">PROJECTS (CODE)</Typography>
        </SectionHOC>

        <SectionHOC isGray={1}>
          {/* card list */}
          <ProfileCardList />
        </SectionHOC>
      </div>
    );
  }
}

DetailContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(detailStyles)(DetailContent);
