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
  Button,
} from '@material-ui/core';

// import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';
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
      'zeit',
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
    description: ['custom blog'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/letseatsoftware.com',
  },
  {
    title: 'fastrouteapp.com',
    tech: 'Native iOS Client (Swift)',
    description: ['swift client'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
    link: 'https://github.com/sjangity/fastrouteapp-ios',
  },
  {
    title: 'peerflight.com',
    tech: 'Native iOS Client (Obj-C)',
    description: ['web-mobile integrated app'],
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
    description: 'The web has evolved, but so has the complex tooling.',
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
  listenMore: {
    marginBottom: '30px',
  },
  specialSection: {
    background: theme.palette.secondary,
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
            50,000 ORGANIC REGISTRATIONS LATER. FAILURE #9.
          </Typography>

          <Container>
            <Grid container style={{ alignItems: 'center' }}>
              <Grid item xs={9}>
                <ImageHOC src="/images/product-stats.png" />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h5" className={classes.listenMore}>
                  Traction is not the hardest part. Traffic graph from one of my
                  online web products.
                </Typography>

                <Typography className={classes.listenMore}>
                  The HARDEST part is learning to listen...
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  Thats the secret of the TOP 1%
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
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              border: '5px solid red',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {ossProjects.map((tier) => (
              <div
                key={tier.title}
                style={{
                  backgroundColor: '#fff',
                  padding: '40px',
                  margin: '10px',
                }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  {tier.title}
                </Typography>
              </div>
            ))}
          </div> */}

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
          <Typography variant="h3">In case you missed it.</Typography>
          <Typography variant="h5">
            Whats the secret to successfull products?
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/detail"
            size="large"
          >
            Deeply empathesize with your users
          </Button>
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
