import PropTypes from 'prop-types';
import user from './data/user.json';
import data from './data/data';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Box
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
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Box>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
