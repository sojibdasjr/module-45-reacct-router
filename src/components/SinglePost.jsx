import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  console.log(post);
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
    </div>
  );
};

export default SinglePost;
