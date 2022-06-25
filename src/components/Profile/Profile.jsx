import { Box } from 'components/Box';
import css from 'components/Profile/Profile.module.css';

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
    <Box
      width="300px"
      height="440px"
      bg="#fff"
      pt={4}
      borderRadius="4px"
      mb={3}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </Box>

      <Box display="flex" as="ul" m={0} p={0}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </Box>
    </Box>
  );
};
