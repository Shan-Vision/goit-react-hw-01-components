import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import user from './user.json';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      // alignItems="center"
      fontSize="14px"
      color="#010101"
      pt={4}
      bg="#ccc"
    >
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
