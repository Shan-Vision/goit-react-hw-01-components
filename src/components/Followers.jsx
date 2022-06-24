export const Followers = ({ userFollowers }) => {
  return (
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{userFollowers}</span>
    </li>
  );
};
