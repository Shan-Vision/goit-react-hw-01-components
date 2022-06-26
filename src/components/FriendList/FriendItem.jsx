import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Li, Indicator, Avatar, FriendName } from './FriendItemComponents';

export const FriendsItem = ({ avatar, name, status }) => {
  return (
    <Li>
      <OnlineButton status={status} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Li>
  );
};

const OnlineButton = ({ status }) => {
  return (
    <Box
      width="40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Indicator isOnline={status ? true : false}></Indicator>
    </Box>
  );
};


FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};