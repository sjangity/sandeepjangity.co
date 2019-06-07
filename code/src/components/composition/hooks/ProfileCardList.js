import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard';

const profileListStyles = {
  root: {
    marginTop: 30,
    display: 'flex',
  },
};

const projects = [
  {
    id: 'proj1',
    url: 'https://sandeepjangity.co',
    isLive: 0,
    isOpenDefault: 1,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective: '',
    title: 'React SPA',
    highlights: ['test2'],
    stack: ['react', ''],
  },
  {
    id: 'proj2',
    url: 'https://letseatsoftware.com',
    isLive: 0,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective: '',
    title: 'React SSG, GraphQL Blog',
    highlights: ['test2'],
    stack: ['react', ''],
  },
  {
    id: 'proj3',
    url: 'https://fastrouteapp.com',
    isLive: 1,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective: '',
    title: 'iOS Swift Native Client',
    highlights: ['test2'],
    stack: ['react', ''],
  },
  {
    id: 'proj4',
    url: 'https://peerflight.com',
    isLive: 1,
    isOpenDefault: 0,
    code: 'https://github.com/sjangity/sandeepjangity.co',
    objective: '',
    title: 'ios Objective-C Native Client with Full-Web UI Integration',
    highlights: ['test2'],
    stack: ['react', ''],
  },
];

class ProfileCardList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {projects.map((project) => (
          <ProfileCard key={project.id} project={project} />
        ))}
      </div>
    );
  }
}
ProfileCardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(profileListStyles)(ProfileCardList);
