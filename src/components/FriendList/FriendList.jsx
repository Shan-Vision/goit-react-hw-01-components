import PropTypes from 'prop-types';
import { FriendListWrapp } from './FriendItemComponents';
import { FriendsItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapp>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
        );
      })}
    </FriendListWrapp>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
