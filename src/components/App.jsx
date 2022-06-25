import PropTypes from 'prop-types';
import user from './user.json';
import data from './data.json';
import { Profile } from './Profile/Profile';
import { Statistics, getRandomColor } from './Statistics/Statistics';
import { Box } from 'components/Box';
import { ThemeProvider } from 'styled-components';

const theme = {
  backgroundColor: getRandomColor(),
};



export const App = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
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
      <ThemeProvider theme={theme}>
        <Statistics title="Upload stats" stats={data} />
      </ThemeProvider>
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

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array,
};
