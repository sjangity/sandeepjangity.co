import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {
  Container,
  Card,
  CardHeader,
  CardMedia,
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

const ossProjects = [
  {
    title: 'sandeepjangity.co',
    tech: 'React SPA',
    description: [
      'production-grade deploy',
      'material-ui',
      'styled-components',
      'jss',
    ],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/sandeepjangity.co',
  },
  {
    title: 'letseatsoftware.com',
    tech: 'React SSG',
    description: ['Headless CMS', 'GraphQL', 'MongoDB'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/letseatsoftware.com',
  },
  {
    title: 'fastrouteapp.com',
    tech: 'Native Swift Client',
    description: [''],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/fastrouteapp-ios',
  },
  {
    title: 'peerflight.com',
    tech: 'Native Obj-C Client',
    description: ['Web-Mobile Integration'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/peerflight-ios',
  },
];

const myThoughts = [
  {
    id: 'thought1',
    concept: 'On Performance',
    description: 'Writing scalable Javascript on the Web',
  },
  {
    id: 'thought4',
    concept: 'On Standards',
    description: 'Incremental improvement, requires consensus.',
  },
  {
    id: 'thought3',
    concept: 'On Design Thinking',
    description: 'What makes a Good Design, Good?',
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

          <Container>
            <Grid container style={{ alignItems: 'center' }}>
              <Grid item xs={9}>
                <ImageHOC src="/images/product-stats.png" />
              </Grid>
              <Grid item xs={3}>
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
                    It is about learning to listen...
                  </Typography>
                </Paper>
                <Typography variant="h5">
                  Thats the secret to building great tech teams that can drive
                  user value
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Traffic graph from one of my online web properties
                </Typography>
              </Grid>
            </Grid>
          </Container>
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
          <Typography variant="h3">
            I LISTEN TO FEEDBACK BY WRITING OSS
          </Typography>

          <Grid container spacing={0} className={classes.ossGrid}>
            {ossProjects.map((tier) => (
              <Grid
                key={tier.title}
                item
                xs={3}
                component={Card}
                className={classes.ossGridItem}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
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
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
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
                <Paper className={classes.pageFooter}>
                  <Typography gutterBottom variant="h5" component="h2">
                    On Automation
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </SectionHOC>

        <SectionHOC>
          <Typography variant="h3" style={{ marginBottom: 50 }}>
            In case you missed it.
          </Typography>

          <Link
            to="/portfolio"
            component={RouterLink}
            classes={{
              root: classes.cta, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            Deeply empathesize with your users at all levels of the product
            pipeline
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
