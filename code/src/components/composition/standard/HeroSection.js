import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, ButtonBase } from '@material-ui/core';
import { Link } from '../../router';

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
    // background: theme.palette.primary.main,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  paper: {
    textAlign: 'center',
    // background: theme.palette.primary.main,
  },
  // image: {
  //   width: 150,
  //   height: 150,
  // },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    // margin: theme.spacing.unit,
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
            <Typography>
              My name is Sandeep Jangity. I am a Techpreneur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" gutterBottom>
            Building successful consumer web products is HARD.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Hiring the right tech teams to drive user-value is hard.
          </Typography>

          <Link to="/detail">I want to help make it easier</Link>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
