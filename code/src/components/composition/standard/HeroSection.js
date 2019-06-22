import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { Container, Grid, ButtonBase } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
// import { HashLink as AnchorLink } from 'react-router-hash-link';
import theme from '../../theme';
import SectionHOC from '../hoc/SectionHOC';

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    // margin: '30px 0',
    // [theme.breakpoints.up('md')]: {
    //   height: '75vh',
    // },
  },
  paper: {
    textAlign: 'center',
  },
  outlinedButtom: {
    textTransform: 'uppercase',
  },
  ctaPrimary: {
    background: theme.palette.secondary.main,
    display: 'block',
    borderRadius: 3,
    fontSize: '1.5em',
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
  cta: {
    background: theme.palette.secondary.main,
    marginTop: 30,
    borderRadius: 3,
    lineHeight: 1.75,
    padding: '6px 16px',
    border: 0,
    color: theme.palette.secondary.contrastText,
    height: 48,
    textDecoration: 'none',
    // '&:hover': {
    //   textDecoration: 'none',
    //   '@media (hover: none)': {
    //     backgroundColor: 'transparent',
    //   },
    //   '&$disabled': {
    //     backgroundColor: 'transparent',
    //   },
    // },
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
      <SectionHOC>
        <Grid container justify="space-around" alignItems="center" spacing={3}>
          <Grid item xs={12} style={{ marginTop: 120 }}>
            <div>
              <Typography variant="h1">
                Hiring the right tech teams to drive innovation is hard
              </Typography>
              <Typography
                variant="h3"
                color="textSecondary"
                component="p"
                style={{ textTransform: 'uppercase', margin: 30 }}
              >
                I invest into operational efficiency
              </Typography>
              <Container>
                <Grid container alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="/images/profile2.png"
                      />
                    </ButtonBase>
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      style={{ textTransform: 'uppercase', marginTop: '30px' }}
                    >
                      11 years in startups AS A FULL STACK WEB-MOBILE ENGINEER /
                      PRODUCT GUY
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link
                      to="/portfolio"
                      component={RouterLink}
                      classes={{
                        root: classes.ctaPrimary, // class name, e.g. `classes-nesting-root-x`
                      }}
                    >
                      Let&#39;s innovate together
                    </Link>
                  </Grid>
                </Grid>
              </Container>
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
            {/* <AnchorLink
            smooth
            to="/portfolio#projects"
            component={RouterLink}
            classes={{
              root: classes.portLink, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            Portfolio
          </AnchorLink> */}
          </Grid>
        </Grid>
      </SectionHOC>
    </div>
  );
}
