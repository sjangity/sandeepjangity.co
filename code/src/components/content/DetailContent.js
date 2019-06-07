import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Link as MuiLink } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import ImageHOC from '../composition/hoc/ImageHOC';
import theme from '../theme';
import SectionHOC from '../composition/hoc/SectionHOC';
import ProfileCardList from '../composition/hooks/ProfileCardList';

const detailStyles = {
  root: {},
  containerThink: {
    display: 'flex',
    // border: '1px solid red',
    // height: '250px',
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    '& > .box': {
      // flexGrow: 1,
      // border: '10px solid green',
    },
    '& .boxThinking': {
      background: theme.palette.primary.main,
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
      display: 'flex',
      alignItems: 'flex-end',
    },
  },
  pitchGrid: {
    display: 'flex',
    // border: '1px solid red',
    // justifyContent: 'space-around',
    // justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
    // flexDirection: 'column',
    '& > *': {
      flexGrow: 1,
      // border: '1px solid green',
      // display: 'flex',
      // flexDirection: 'column',
      // aligItems: 'center',
      // width: '350px',
    },
  },
  pitchGridItem: {
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid blue',
    alignItems: 'center',
  },
  pitchGridItemResume: {
    // flexGrow: 3,
    // width: '300px',
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid blue',
    alignItems: 'center',
  },
  cta: {
    background: theme.palette.secondary.main,
    marginTop: 30,
    borderRadius: 3,
    lineHeight: 1.75,
    padding: '6px 16px',
    border: 0,
    color: theme.palette.secondary.contrastText,
    height: 48,
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
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

class DetailContent extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SectionHOC isGray={1}>
          {/* <Typography variant="h3">
            FROM LAMP to PYTHON to MOBILE to JS.
          </Typography> */}
          <div className={classes.pitchGrid}>
            <Link
              to="/"
              component={RouterLink}
              classes={{
                root: classes.portLink, // class name, e.g. `classes-nesting-root-x`
              }}
            >
              Home
            </Link>
            <Box
              className={classes.pitchGridItemResume}
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                href="https://www.dropbox.com/s/vveohisfofnjuca/Sandeep-Jangity-Resume.pdf?dl=1"
                className={classes.cta}
              >
                Download Resume
              </Button>
              {/* <Link
                to="https://www.dropbox.com/s/vveohisfofnjuca/Sandeep-Jangity-Resume.pdf?dl=1"
                // component={RouterLink}
                classes={{
                  root: classes.cta, // class name, e.g. `classes-nesting-root-x`
                }}
              >
                <Typography variant="h2">Download Resume</Typography>
              </Link> */}
              <MuiLink href="/">
                <ImageHOC src="/images/profile2.png" />
              </MuiLink>
              <Typography variant="h4" color="textSecondary" component="p">
                Sandeep Jangity
              </Typography>
            </Box>
            <div className={classes.pitchGridItem}>
              <MuiLink href="/">
                {/* <HomeIcon
                  style={{ fontSize: 72 }}
                  fontSize={'large'}
                  color={'secondary'}
                /> */}
                <HomeIcon className={classes.icon} style={{ fontSize: 100 }} />
              </MuiLink>
            </div>

            <div className={classes.pitchGridItem}>
              <MuiLink href="https://github.com/sjangity" target="_">
                <ImageHOC src="/images/gh-icon.png" />
              </MuiLink>

              <MuiLink
                href="https://stackoverflow.com/users/story/11091758"
                target="_"
              >
                <ImageHOC src="/images/so-icon.png" />
              </MuiLink>
              <MuiLink
                href={'https://www.linkedin.com/in/sjangity/'}
                target="_"
              >
                <ImageHOC src="/images/li-icon.png" />
              </MuiLink>
            </div>
          </div>
        </SectionHOC>

        <SectionHOC>
          <div className={classes.containerThink}>
            <div className="box boxThinking">
              <Grid
                container
                direciton="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6}>
                  <Typography variant="h3">
                    This is what I am thinking of these days
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <img alt="test" src="/images/brain-icon.png" />
                  {/* <ImageHOC src="/images/brain-icon.png" /> */}
                </Grid>
              </Grid>
            </div>
            <div className="box boxModern">
              <Typography variant="h3">modern web</Typography>
            </div>
            <div className="box boxProcess">
              <Typography variant="h3">timeless process</Typography>
            </div>
            <div className="box boxDesign">
              <Typography variant="h3">timeless design</Typography>
            </div>
          </div>
        </SectionHOC>
        <SectionHOC>
          <div className="box boxTech">
            <ImageHOC src="/images/stacks.png" />
          </div>
        </SectionHOC>
        <SectionHOC>
          <Typography variant="h3">OPEN SOURCE WORK</Typography>
          <ProfileCardList />
        </SectionHOC>
        {/* <Paper
          elevation={1}
          style={{
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            style={{ textAlign: 'center', textTransform: 'uppercase' }}
          >
            Growth curves are strongly correlated to empathy and degree of
            experimentation
          </Typography>
        </Paper> */}
      </div>
    );
  }
}

DetailContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(detailStyles)(DetailContent);
