import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  // Container,
  Button,
  // Card,
  // CardHeader,
  // CardMedia,
  // CardContent,
  Grid,
  Paper,
  // Button,
  Link as MuiLink,
} from '@material-ui/core';

import Box from '@material-ui/core/Box';
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
    // alignItems: 'center',
    textAlign: 'center',
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
    },
  },
  pitchGridItem: {},
  pitchGridItemResume: {
    // flexGrow: 3,
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid blue',
    alignItems: 'center',
  },
};

class DetailContent extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
    return (
      <div>
        <SectionHOC>
          <Typography variant="h3">
            FROM LAMP to PYTHON to MOBILE to JS. I VE DONE IT ALL.
          </Typography>
          <div className={classes.pitchGrid}>
            <div className={classes.pitchGridItem}>
              <MuiLink href="/">
                <ImageHOC src="/images/profile2.png" />
              </MuiLink>
            </div>
            <div className={classes.pitchGridItem}>
              <MuiLink href="https://github.com/sjangity">
                <ImageHOC src="/images/gh-icon.png" />
              </MuiLink>
            </div>
            <div className={classes.pitchGridItem}>
              <MuiLink href="https://stackoverflow.com/users/story/11091758">
                <ImageHOC src="/images/so-icon.png" />
              </MuiLink>
            </div>
            <div className={classes.pitchGridItem}>
              <MuiLink href={'https://www.linkedin.com/in/sjangity/'}>
                <ImageHOC src="/images/li-icon.png" />
              </MuiLink>
            </div>
            <Box
              className={classes.pitchGridItemResume}
              justifyContent="flex-end"
            >
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6" color="textSecondary" component="p">
                  Sandeep Jangity
                </Typography>
                <Button
                  variant="contained"
                  href="https://www.dropbox.com/s/vveohisfofnjuca/Sandeep-Jangity-Resume.pdf?dl=1"
                  className={classes.button}
                >
                  Download Resume
                </Button>
              </Paper>
            </Box>
          </div>
        </SectionHOC>

        <section>
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
        </section>
        <SectionHOC>
          <ImageHOC src="/images/stacks.png" />
        </SectionHOC>
        <SectionHOC>
          <Typography variant="h3">
            PROFESSIONAL PROJECTS (OPEN-SOURCED)
          </Typography>
          <ProfileCardList />
        </SectionHOC>

        {/* <section className="PanelHero Centered" id="hero">
          <div className="HeroProfile" />
          <div>
            <h1>
              <span>
                HIREe ME AND LET’S ZEN TOGETHER. I AM OPEN AN AVAILABLE.
              </span>
            </h1>
          </div>

          <h3>
            <Link to="/">See what I have done</Link>
          </h3>
        </section>
 */}
      </div>
    );
  }
}

DetailContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(detailStyles)(DetailContent);
