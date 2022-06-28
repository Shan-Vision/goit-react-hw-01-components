import PropTypes from 'prop-types';
import { Item, Indicator, Avatar, FriendName } from './FriendItemComponents';

export const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Indicator isOnline={isOnline}></Indicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
