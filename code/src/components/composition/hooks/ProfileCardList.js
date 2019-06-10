import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard';

import { projects } from '../../../data';

const profileListStyles = {
  root: {
    // marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // '&:nth-child(even)': {
    //   // border: '10px solid green',
    //   backgroundColor: theme.palette.secondary.main,
    // },
  },
};

class ProfileCardList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {projects.map((project, index) => (
          <ProfileCard
            key={project.key}
            project={project}
            projectIndex={index + 1}
          />
        ))}
      </div>
    );
  }
}
ProfileCardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileListStyles)(ProfileCardList);
