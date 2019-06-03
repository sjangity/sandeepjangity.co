import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import {
  Container,
  Card,
  // CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Button,
  ButtonBase,
} from '@material-ui/core';
import Build from '@material-ui/icons/Build';
import { withStyles } from '@material-ui/core/styles';
// import { Link } from '../router';
import StarIcon from '@material-ui/icons/StarBorder';
import theme from '../theme';

const ossProjects = [
  {
    title: 'sandeepjangity.co',
    tech: 'React SPA',
    description: ['first react app'],
    buttonText: 'Code',
    buttonVariant: 'outlined',
  },
];

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
                My MISSION is to do both with the Zen of Product Development
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
    marginTop: '30px',
  },
  // shareBoxFlexContainer: {
  //   display: 'flex',
  //   '> shareBoxFlexContainer': {},
  // },
};
class MasterContent extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { classes } = this.props;
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
        </SectionHOC>

        <SectionHOC alt={1}>
          <Typography variant="h3">I SHARE</Typography>
          <Grid container spacing={0}>
            {ossProjects.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                container
                alignItems="center"
                className={classes.shareProject}
              >
                <Grid item xs={3}>
                  {/* <Build style={{ fontSize: 72 }} fontSize={'large'} /> */}
                  <Build fontSize={'large'} />
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </Grid>
                <Grid item xs={9}>
                  <Card>
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
                        <Typography
                          component="h2"
                          variant="h3"
                          color="textPrimary"
                        >
                          {tier.tech}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          react, webpack, babel, etc.,
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
                    {/* <CardActions>
                      <Button fullWidth variant={tier.buttonVariant}>
                        {tier.buttonText}
                      </Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              </Grid>
            ))}
          </Grid>
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
MasterContent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const MasterHOC = withStyles(masterStyles)(MasterContent);

export default MasterHOC;
