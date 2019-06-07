import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import {
  Grid,
  Card,
  // Collapse,
  CardHeader,
  CardContent,
  CardActions,
  Link as MuiLink,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  card: {
    // maxWidth: 500,
    // maxWidth: '100%',
    width: 350,
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
}));

// const StackButton = styled.button`
//   background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
//   color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

const CodeButton = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// function CardLiveTitle(title) {
//   return (
//     <MuiLink href={projectURL} target="_blank">
//       {isLiveLink}
//     </MuiLink>
//   );
// }

const ProfileCard = (props) => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const { project } = props;
  const isLiveLink = project.isLive ? project.url : 'GITHUB';
  const projectURL = project.isLive ? project.url : project.code;
  // function handleExpandClick() {
  //   setExpanded(!expanded);
  // }
  // if (project.isOpenDefault) {
  //   handleExpandClick();
  // }

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardHeader
            // avatar={
            //   // <Avatar
            //   //   alt="Sandeep Jangity"
            //   //   src="/images/profile2.jpg"
            //   //   className={classes.avatar}
            //   // />
            //   <Avatar aria-label="Recipe" className={classes.avatar}>
            //     L
            //   </Avatar>
            // }
            // action={
            //   <IconButton aria-label="Settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            // action={
            //   <MuiLink href={projectURL} target="_blank">
            //     {isLiveLink}
            //   </MuiLink>
            // }
            title={
              <MuiLink href={projectURL} target="_blank">
                {isLiveLink}
              </MuiLink>
            }
            // subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant="h3" color="textSecondary" component="p">
              {project.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <MuiLink href={project.code} target="_blank">
              <CodeButton>code</CodeButton>
            </MuiLink>
            {/* <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton> */}
            {/* <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton> */}
            {/* <StackButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
            >
              stack
            </StackButton> */}
          </CardActions>
          {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className={classes.expandedProject}>
                {project.highlights.map((highlight, index) => (
                  <div key={index}>{highlight}</div>
                ))}
              </div>
            </CardContent>
          </Collapse> */}
        </Card>
      </Grid>
    </React.Fragment>
  );
};

ProfileCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProfileCard;
