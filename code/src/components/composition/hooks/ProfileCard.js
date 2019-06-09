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
import { projectHighlights } from '../../../data';
// import theme from '../../theme';

import { LinkButton, CodeButton, StackButton } from '../../styled';

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
    // maxWidth: 500,
    // maxWidth: '100%',
    width: 250,
    marginTop: 10,
    aligItems: 'center',
    justifyContent: 'center',
  },
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
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
  // projectURL: {
  //   width: '100%',
  // },
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
            <Grid item xs={2}>
              <Avatar>{props.projectIndex}</Avatar>
            </Grid>
            <Grid item xs={2}>
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
            <Grid item xs={6} style={{ textAlign: 'left' }}>
              <MuiLink href={project.code} target="_blank">
                <CodeButton>code</CodeButton>
              </MuiLink>
              <MuiLink
                className={classes.projectURL}
                href={project.code}
                target="_blank"
              >
                <LinkButton>{projectURL}</LinkButton>
              </MuiLink>
            </Grid>
            <Grid item xs={2}>
              {project.objective}
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
                    <Grid item xs={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        HIGHLIGHTS
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        BUILD
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        TEST
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h4"
                        color="textSecondary"
                        gutterBottom
                      >
                        DEPLOY
                      </Typography>
                    </Grid>

                    <Grid item xs={3}>
                      <div className={classes.projectIcons}>
                        {highlights.map((highlight, index) => (
                          <div key={index}>{highlight}</div>
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className={classes.projectIcons}>
                        {project.architecture.build.map((tech, index) => (
                          // <div key={index}>{tech}</div>
                          <img
                            key={index}
                            // className={classes.img}
                            alt="complex"
                            src={`/images/tech/${tech}.png`}
                          />
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className={classes.projectIcons}>
                        {project.architecture.test.map((tech, index) => (
                          <img
                            key={index}
                            // className={classes.img}
                            alt="complex"
                            src={`/images/tech/${tech}.png`}
                          />
                        ))}
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className={classes.projectIcons}>
                        {project.architecture.deploy.map((tech, index) => (
                          <img
                            key={index}
                            // className={classes.img}
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

// const ProfileCard = (props) => {
//   const classes = useStyles();
//   const { project } = props;
//   const isLiveLink = project.isLive ? 'LIVE' : 'GITHUB';
//   const projectURL = project.isLive ? project.url : project.code;

//   // hooks
//   const [expanded, setExpanded] = React.useState(false);
//   function handleExpandClick() {
//     setExpanded(!expanded);
//   }

//   return (
//     <React.Fragment>
//       <Grid container justify="center">
//         <Card className={classes.card}>
//           <CardHeader
//             title={
//               <MuiLink href={projectURL} target="_blank">
//                 {isLiveLink}
//               </MuiLink>
//             }
//             subheader={projectURL}
//           />
//           <CardContent>
//             <Typography variant="h5" color="textSecondary" component="p">
//               {project.title}
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <MuiLink href={project.code} target="_blank">
//               <CodeButton>code</CodeButton>
//             </MuiLink>
//             {/* <IconButton aria-label="Add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="Share">
//               <ShareIcon />
//             </IconButton> */}
//             {/* <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="Show more"
//             >
//               <ExpandMoreIcon />
//             </IconButton> */}
//             <StackButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}
//             >
//               stack
//             </StackButton>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <div className={classes.expandedProject}>
//                 {project.highlights.map((highlight, index) => (
//                   <div key={index}>{highlight}</div>
//                 ))}
//               </div>
//             </CardContent>
//           </Collapse>
//         </Card>
//       </Grid>
//     </React.Fragment>
//   );
// };

ProfileCard.propTypes = {
  project: PropTypes.object.isRequired,
  projectIndex: PropTypes.number,
};

export default ProfileCard;
