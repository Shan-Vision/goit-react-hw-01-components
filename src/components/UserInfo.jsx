export const UserInfo = ({ userName, tag, location }) => {
  return (
    <>
      <p className="name">{userName}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </>
  );
};
