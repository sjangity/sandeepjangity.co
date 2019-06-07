import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { Grid, ButtonBase } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import theme from '../../theme';
import ImageHOC from '../hoc/ImageHOC';

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '30px 0',
    // marginBottom: 30,
  },
  paper: {
    textAlign: 'center',
  },
  // img: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: '100%',
  //   maxHeight: '100%',
  // },
  outlinedButtom: {
    textTransform: 'uppercase',
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
    color: theme.palette.secondary.contrastText,
    textShadow: '0 1px 0 #EDEDED',
    textDecoration: 'none',
    position: 'absolute',
    top: '40px',
    left: '20px',
    width: '250px',
    transformOrigin: '0 0',
    transform:
      'rotate(-45deg) translate(-102px, 22px)' /* Firefox 16+, Opera 12.50+ */,
    background: theme.palette.secondary.main,
  },
});
export default function HeroSection() {
  const classes = heroStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="space-around" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            Hiring the right tech teams to deliver user-value is hard
          </Typography>

          <div>
            <Link
              to="/portfolio"
              component={RouterLink}
              classes={{
                root: classes.cta, // class name, e.g. `classes-nesting-root-x`
              }}
            >
              I want to help make it easier
            </Link>
          </div>
          <div>
            <Typography
              variant="h3"
              color="textSecondary"
              component="p"
              style={{ textTransform: 'uppercase', margin: 30 }}
            >
              1 IPO and 11 years in bootstrapped startups
            </Typography>
            <Typography
              variant="h4"
              color="textSecondary"
              style={{ textTransform: 'uppercase', margin: 30 }}
            >
              as a FULL STACK responsible HACKER
            </Typography>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/images/profile2.png"
              />
              <Typography
                variant="h6"
                color="textSecondary"
                component="p"
                style={{ textTransform: 'uppercase', margin: 30 }}
              >
                sandeep jangity
              </Typography>
              <Link href={'https://www.linkedin.com/in/sjangity/'} target="_">
                <ImageHOC src="/images/li-icon.png" />
              </Link>
            </ButtonBase>
          </div>
          <Link
            to="/portfolio"
            component={RouterLink}
            classes={{
              root: classes.portLink, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            Portfolio
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
