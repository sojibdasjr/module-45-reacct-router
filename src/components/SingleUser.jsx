import { Link } from "react-router-dom";

const SingleUser = ({ user }) => {
  const { id, name, phone, website } = user;
  const userStyle = {
    border: "2px solid red",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={userStyle}>
      <h3>Name : {name} </h3>
      <h3>Phone : {phone} </h3>
      <h3>Website : {website} </h3>
      <Link to={`/user/${id}`}>
        See More
        <button>User name</button>
      </Link>
    </div>
  );
};

export default SingleUser;
