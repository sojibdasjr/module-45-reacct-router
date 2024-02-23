import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const navigator = useNavigate();
  const handleShow = () => {
    navigator(`/post/${id}`);
  };
  const { userId, id, title } = post;
  return (
    <div style={{ border: "2px solid green", margin: "5px", padding: "5px" }}>
      <h3>{id}</h3>
      <h2>Title :{title} </h2>
      <Link to={`/post/${id}`}>
        <button style={{ background: "green", color: "white" }}>
          SEE MORE
        </button>
      </Link>
      <button onClick={handleShow}>Show Details </button>
    </div>
  );
};

export default SinglePost;
