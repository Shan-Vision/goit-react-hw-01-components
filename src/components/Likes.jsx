export const Likes = ({ userLikes }) => {
  return (
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{userLikes}</span>
    </li>
  );
};
