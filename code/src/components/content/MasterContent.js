import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import { Link } from '../router';
import theme from '../theme';

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    // margin: 'auto',
    textAlign: 'center',
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
function HeroSection() {
  const classes = heroStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={4}>
          <Paper elevation={0} className={classes.paper}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/images/profile.png"
              />
            </ButtonBase>
            <Typography>11 years as a Frontend/Backend Developer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h2" gutterBottom>
            Building products people want is hard, really hard.
          </Typography>
          <Typography variant="h3" gutterBottom>
            Hiring teams that can incrementally deliver value is equally hard.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item container>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
              <Typography variant="h5">1 IPO</Typography>
              <Typography variant="h6">9 Failures</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={0}>
              <Typography variant="h4">
                My MISSION is to master the Zen of Product Development
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const sectionStyles = {
  paper: {
    padding: '3em 0 4.5em',
    elevation: 0,
    textAlign: 'center',
    '&:nth-child(even)': {
      backgroundColor: theme.palette.primary.main,
    },
  },
};
class SectionPanel extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Paper elevation={0} className={classes.paper}>
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
};
const SectionHOC = withStyles(sectionStyles)(SectionPanel);

const imageStyles = {
  root: {
    margin: '20px',
    display: 'block',
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
const ImageHOC = withStyles(imageStyles)(CustomImage);

class MasterContent extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <HeroSection />

        <SectionHOC alt={1}>
          <Typography variant="h4">
            0 marketing, 2-month launch cycles, 50K registered conversions on
            products I’ve conceived is a noteable accomplishment; however....
          </Typography>

          <ImageHOC src="/images/product-stats.png" />

          <Typography variant="h5">
            I see my last 12-years in startups as only the beginn of my Zen
            journey, and so...
          </Typography>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3">I BLOG</Typography>
        </SectionHOC>

        <SectionHOC alt={1}>
          <Typography variant="h3">I SHARE</Typography>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3">
            I continue to build learn & Innovate
          </Typography>
        </SectionHOC>
      </div>
    );
  }
}

export default MasterContent;
