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
import { ossProjects, myThoughts } from '../../data';

const masterStyles = {
  '@global': {
    body: {
      // backgroundColor: theme.palette.primary.dark,
      // backgroundImage: 'linear-gradient(260deg, #4cb5ab 0%, #81e8dd 100%)',
      // backgroundImage: 'linear-gradient(260deg, #000 100%, #efefef 100%)',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  root: {
    [theme.breakpoints.down('md')]: {
      margin: '80px 0',
    },
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  cardGrid: {
    marginTop: 30,
  },
  card: {
    // backgroundImage: 'linear-gradient(260deg, #000 100%, #efefef 100%)',
    // color: 'white',
    background: theme.palette.primary.main,
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
  pitchGridItemResume: {
    // flexGrow: 3,
    // width: '300px',
    display: 'flex',
    flexDirection: 'column',
    // border: '1px solid blue',
    alignItems: 'center',
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
};

class MasterContent extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <HeroSection />

        <SectionHOC>
          <Typography variant="h3">
            1 MILLION PAGE VIEWS, 50K USER REGISTRATIONS, ZERO MARKETING, ZERO
            PR
          </Typography>
          <Typography variant="h4" color="textSecondary">
            Forget bad products, even great ideas fail to reach true potential
            if user empathy stops
          </Typography>
          <Container>
            <Grid container style={{ alignItems: 'center' }} spacing={4}>
              <Grid item xs={12}>
                <ImageHOC src="/images/product-stats.png" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h5" color="textSecondary">
                  product success is correlated with user empathy
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  eleveation={0}
                  style={{
                    background: theme.palette.primary.light,
                    padding: '5px',
                    margin: '30px 0',
                  }}
                >
                  <Typography variant="h6">
                    The hard part is learning to listen to your users
                    (continuously)
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h5" color="textSecondary">
                  That&#39;s the secret to hiring great tech teams
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3">ASSUMPTIONS AND FACTS CAN CHANGE</Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            style={{ marginTop: 30 }}
          >
            listening is not passive, but an active process
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 30 }}
          >
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
            TODAY, <span className={classes.highlight}>I LISTEN</span> TO
            FEEDBACK BY WRITING OSS
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
            {ossProjects.map((project) => (
              <Grid
                key={project.key}
                item
                xs={12}
                sm={3}
                component={Card}
                className={classes.ossGridItem}
              >
                <CardHeader
                  title={project.keyShort}
                  subheader={project.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={project.key === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {project.tech}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      Highlights
                    </Typography>
                  </div>
                  <ul>
                    {project.highlights.map((line) => (
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
            <span className={classes.highlight}>I LISTEN</span> by asking deeper
            questions
          </Typography>
          <Container className={classes.cardGrid}>
            <Grid
              container
              spacing={4}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {myThoughts.map((thought) => (
                <Grid item key={thought.id} xs={12} sm={12 / myThoughts.length}>
                  <Card>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        className={classes.card}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {thought.concept}
                      </Typography>
                      <Typography>{thought.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </SectionHOC>

        <SectionHOC>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3">
                  <span className={classes.highlight}>I LISTEN</span> by
                  applying empathy in design and code
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  style={{ marginBottom: 50, marginTop: 30 }}
                >
                  because users only care about the end-product
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Link
                  to="/portfolio"
                  component={RouterLink}
                  classes={{
                    root: classes.ctaPrimary, // class name, e.g. `classes-nesting-root-x`
                  }}
                >
                  And it needs to be easy, useful, fast, reliable and engaging
                </Link>
              </Grid>
            </Grid>
          </Container>
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
