import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';

// import {
//   FavoriteIcon,
//   ShareIcon,
//   ExpandMoreIcon,
//   MoreVertIcon,
// } from '@material-ui/icons';

import {
  Avatar,
  Grid,
  CardContent,
  IconButton,
  Zoom,
  Typography,
  Link as MuiLink,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import ImageHOC from '../hoc/ImageHOC';
import { projectHighlights } from '../../../data';
// import theme from '../../theme';

import { LinkButton, StackButton } from '../../styled';

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    // margin: '50px 0',
    border: `1px solid ${theme.palette.primary.main}`,
    // boxShadow: `10px 5px 5px ${theme.palette.secondary.main}`,
    // boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)',
    // backgroundColor: theme.palette.primary.main,
    // display: 'flex',
  },
  card: {
    // width: 250,
    marginTop: 10,
    aligItems: 'center',
    justifyContent: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  expandedProject: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    color: theme.palette.secondary.main,
  },
}));

const ProfileCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  const highlights = projectHighlights(project.key);
  // const isLiveLink = project.isLive ? 'LIVE' : 'GITHUB';
  const projectURL = project.isLive ? project.url : project.code;

  // hooks
  const [expanded, setExpanded] = React.useState(!!project.isOpenDefault);
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <Grid container alignItems="center">
            <Grid item xs={4} sm={2}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <StackButton>V</StackButton>
              </IconButton>
            </Grid>
            <Grid item xs={4} sm={1} style={{ textAlign: 'right' }}>
              <Avatar>{props.projectIndex}</Avatar>
            </Grid>
            <Grid item xs={4} sm={1} style={{ textAlign: 'left' }}>
              <MuiLink href={project.code} target="_">
                <ImageHOC src="/images/gh-icon.png" style={{ margin: 0 }} />
              </MuiLink>
            </Grid>
            <Grid item xs={12} sm={8} style={{ textAlign: 'left' }}>
              <Typography variant="h5" style={{ textTransform: 'none' }}>
                {project.objective}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} style={{ textAlign: 'right' }}>
              <MuiLink href={project.code} target="_blank">
                <LinkButton>{projectURL}</LinkButton>
              </MuiLink>
            </Grid>

            <Grid item xs={12}>
              <Zoom in={expanded} unmountOnExit>
                {/* <svg className={classes.svg}>
                  <polygon
                    points="0,100 50,00, 100,100"
                    className={classes.polygon}
                  />
                </svg> */}
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        HIGHLIGHTS
                      </Typography>
                      <div className={classes.projectIcons}>
                        {highlights.map((highlight, index) => (
                          <p key={index}>{highlight}</p>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        BUILD
                      </Typography>
                      <div className={classes.projectIcons}>
                        {project.architecture.build.map((tech, index) => (
                          <img
                            key={index}
                            alt="complex"
                            src={`/images/tech/${tech}.png`}
                          />
                        ))}
                      </div>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        TEST
                      </Typography>
                      <div className={classes.projectIcons}>
                        {project.architecture.test.map((tech, index) => (
                          <img
                            key={index}
                            alt="complex"
                            src={`/images/tech/${tech}.png`}
                          />
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        DEPLOY
                      </Typography>
                      <div className={classes.projectIcons}>
                        {project.architecture.deploy.map((tech, index) => (
                          <img
                            key={index}
                            alt="complex"
                            src={`/images/tech/${tech}.png`}
                          />
                        ))}
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Zoom>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

ProfileCard.propTypes = {
  project: PropTypes.object.isRequired,
  projectIndex: PropTypes.number,
};

export default ProfileCard;
