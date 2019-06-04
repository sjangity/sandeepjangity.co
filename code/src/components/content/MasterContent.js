import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
  // styled
} from '@material-ui/styles';
// import styled from 'styled-components';
import {
  Container,
  Card,
  // CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  // Divider,
  Paper,
  Button,
  ButtonBase,
} from '@material-ui/core';

// import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/StarBorder';
import { Link } from '../router';
import theme from '../theme';

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
  // {
  //   id: 'thought2',
  //   concept: 'Itearative Innovation',
  //   description: 'How to practice iterative learning?',
  // },
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

const heroStyles = makeStyles({
  root: {
    flexGrow: 1,
    // background: theme.palette.primary.main,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  paper: {
    // padding: theme.spacing(2),
    // margin: 'auto',
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
function HeroSection() {
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
            Building products people want is HARD.
          </Typography>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            I spent the last 11 years living, breathing startups as an ENGINEER.
          </Typography> */}

          <Typography variant="h5" gutterBottom>
            Hiring tech teams that can incrementally deliver value is HARD.
          </Typography>

          <Link to="/detail">I want to help make it easier</Link>

          {/* <Button
            variant="contained"
            color="secondary"
            href="/detail"
            size="large"
          >
            I want to help make it easier
          </Button> */}
        </Grid>
        <Grid item xs={2} />
        {/* <Grid item xs={2} />
        <Grid item xs={10}>
          <div>
            <h2>
              As a Full Stack Engineer and a Techpreneur, the last 7 years has
              profoundly changed me
            </h2>
            <ul>
              <li>I went through 1 IPO, </li>
              <li>
                spent 4 years building products for startups that no one wanted,
              </li>
              <li>AND</li>
            </ul>
          </div>
        </Grid> */}
      </Grid>
      {/* <Grid container>
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
                My MISSION is to do both with the{' '}
                <Link to="/detail">Zen of Product Development</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
}

const sectionStyles = {
  paper: {
    padding: '3em 0 4.5em',
    elevation: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    '&:nth-child(even)': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  paperSpecial: {
    padding: '3em 0 4.5em',
    elevation: 0,
    textAlign: 'center',
    background: theme.palette.secondary,
  },
};
class SectionPanel extends React.Component {
  render() {
    const { classes } = this.props;
    const isSpecial = !!this.props.isSpecial;
    return (
      <React.Fragment>
        <Paper
          elevation={0}
          className={classes.paper}
          style={isSpecial ? { background: theme.palette.secondary.main } : {}}
        >
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
  isSpecial: PropTypes.bool,
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
                  Building niche products is not the hardest part. Traffic graph
                  from one of my own.
                </Typography>

                <Typography className={classes.listenMore}>
                  The HARDEST part is learning to listen...
                </Typography>

                <Typography variant="h5" className={classes.listenMore}>
                  Thats the secret of the TOP 1%
                </Typography>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="h4">
                  Thats the secret of the TOP 1%
                </Typography>
              </Grid> */}
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
          <Typography variant="h3">I LISTEN BY WRITING OSS</Typography>
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
            Whats the secret to successfull product development?
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
