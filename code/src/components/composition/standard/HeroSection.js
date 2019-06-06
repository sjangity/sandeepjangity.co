import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, ButtonBase } from '@material-ui/core';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import theme from '../../theme';

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  paper: {
    textAlign: 'center',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
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
});
export default function HeroSection() {
  const classes = heroStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={2}>
          <Paper elevation={0} className={classes.paper}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/images/profile2.png"
              />
            </ButtonBase>
            <Typography>My name is Sandeep Jangity.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" gutterBottom>
            Hiring the right tech teams to deliver user-value is hard.
          </Typography>

          <Link
            to="/portfolio"
            component={RouterLink}
            classes={{
              root: classes.cta, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            I want to help make it easier
          </Link>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            style={{ textTransform: 'uppercase', margin: 30 }}
          >
            11 years living, breathing startups as a FULL STACK ENGINEER.
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
