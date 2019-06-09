import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Paper,
} from '@material-ui/core';

// import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import theme from '../theme';
import SectionHOC from '../composition/hoc/SectionHOC';
import ImageHOC from '../composition/hoc/ImageHOC';
import HeroSection from '../composition/standard/HeroSection';

import { ossProjects } from '../../data';

const myThoughts = [
  {
    id: 'thought1',
    concept: 'On Performance',
    description: 'Does FP Javascript scale better than OOP JS?',
  },
  {
    id: 'thought4',
    concept: 'On Standards',
    description: 'Will Apple ever unlock full web push notifcation support?',
  },
  {
    id: 'thought3',
    concept: 'On Design Thinking',
    description: 'What are the tell-tale signs of GOOD UI design?',
  },
];

const masterStyles = {
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  cardGrid: {
    marginTop: 30,
  },
  grid: {
    width: 1200,
    marginTop: 40,
  },
  paper: {
    // textAlign: 'center',
  },
  panelmax: {
    width: '400px',
  },
  shareProject: {
    // marginTop: '30px',
  },
  pageFooter: {
    padding: '30px 0px',
  },
  ossGrid: {
    display: 'flex',
    // border: '5px solid red',
    justifyContent: 'space-around',
  },
  ossGridItem: {
    margin: 16,
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'lowercase',
  },
  // listenMore: {
  //   marginBottom: '30px',
  // },
  specialSection: {
    background: theme.palette.secondary,
  },
  cta: {
    background: theme.palette.secondary.main,
    borderRadius: 3,
    lineHeight: 1.75,
    padding: '2em',
    border: 0,
    color: theme.palette.secondary.contrastText,
    height: 48,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  ctaPrimary: {
    background: theme.palette.secondary.main,
    marginTop: 30,
    borderRadius: 3,
    lineHeight: 1.75,
    padding: '16px',
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
  pitchGridItemResume: {
    // flexGrow: 3,
    // width: '300px',
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid blue',
    alignItems: 'center',
  },
};

class MasterContent extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeroSection />

        <SectionHOC>
          <Typography variant="h3">
            1 MILLION PAGE VIEWS, 50K ORGANIC REGISTRATIONS, ZERO PR-MARKETING
          </Typography>
          <Typography variant="h4" style={{ margin: '30px 0' }}>
            Innovation is correlated strongly with user empathy
          </Typography>
          <Container>
            <Grid container style={{ alignItems: 'center' }}>
              <Grid item xs={8}>
                <ImageHOC src="/images/product-stats.png" />
                <Typography variant="h6">
                  traffic from one of my online web properties
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5" className={classes.listenMore}>
                  Traction is not the hardest part
                </Typography>

                <Paper
                  eleveation={0}
                  style={{
                    background: 'white',
                    padding: '5px',
                    margin: '30px 0',
                  }}
                >
                  <Typography variant="h6">
                    It is about learning to listen to your users (continuously)
                  </Typography>
                </Paper>
                <Typography variant="h5">
                  Thats the secret to building great tech teams that can drive
                  innovation
                </Typography>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="h4">
                  Traffic graph from one of my online web properties
                </Typography>
              </Grid> */}
            </Grid>
          </Container>
        </SectionHOC>
        <SectionHOC>
          <Typography variant="h3">so its been a heck of a ride</Typography>

          <Typography variant="h4" style={{ marginTop: 30 }}>
            after 11 years i&#39;ve become a better listener
          </Typography>
          <Typography variant="h5" style={{ marginTop: 30 }}>
            a very simple principle to understand, but very hard to master
          </Typography>
        </SectionHOC>

        {/* <SectionHOC>
          <Typography variant="h3">I BLOG</Typography>

          <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
              <Grid item key="some1" xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key="some2" xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </SectionHOC> */}

        <SectionHOC>
          <Typography variant="h3" style={{ marginBottom: 30 }}>
            TODAY, I LISTEN TO FEEDBACK BY WRITING OSS
          </Typography>
          <Box
            className={classes.pitchGridItemResume}
            justifyContent="flex-end"
          >
            <Link href="https://github.com/sjangity" target="_">
              <ImageHOC src="/images/gh-icon.png" />
            </Link>
          </Box>
          <Grid container spacing={0} className={classes.ossGrid}>
            {ossProjects.map((tier) => (
              <Grid
                key={tier.key}
                item
                xs={3}
                component={Card}
                className={classes.ossGridItem}
              >
                <CardHeader
                  title={tier.key}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.key === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.tech}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      Highlights
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Grid>
            ))}
          </Grid>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3">
            I listen by asking deeper questions
          </Typography>
          <Container className={classes.cardGrid}>
            <Grid container spacing={4}>
              {myThoughts.map((thought) => (
                <Grid item key={thought.id} xs={12 / myThoughts.length}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {thought.concept}
                      </Typography>
                      <Typography>{thought.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              <Grid item xs={12}>
                {/* <Paper className={classes.pageFooter}>
                  <Typography gutterBottom variant="h5" component="h2">
                    On Automation
                  </Typography>
                </Paper> */}
                <Grid item>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        on automation
                      </Typography>
                      <Typography>
                        how do you practice D-R-Y at all stages of product
                        development?
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3" style={{ marginBottom: 50 }}>
            I listen by applying empathy to code, design, and strategy
          </Typography>

          <Link
            to="/portfolio"
            component={RouterLink}
            classes={{
              root: classes.cta, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            because users dont care about technology, they care about moments
            and experiences
          </Link>
        </SectionHOC>
      </div>
    );
  }
}
MasterContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const MasterHOC = withStyles(masterStyles)(MasterContent);

export default MasterHOC;
