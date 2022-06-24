import { Avatar } from './Avatar';
import { UserInfo } from './UserInfo';
import { Followers } from './Followers';
import { Views } from './Views';
import { Likes } from './Likes';

export const Profile = ({
  name,
  tag,
  location,
  image,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <Avatar avatarImage={image} />
        <UserInfo userName={name} tag={tag} location={location} />
      </div>
      <ul className="stats">
        <Followers userFollowers={followers} />
        <Views userViews={views} />
        <Likes userLikes={likes} />
      </ul>
    </div>
  );
};

