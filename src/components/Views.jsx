export const Views = ({ userViews }) => {
  return (
    <li>
      <span className="label">Views </span>
      <span className="quantity">{userViews}</span>
    </li>
  );
};
