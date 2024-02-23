import { useLoaderData, useNavigate } from "react-router-dom";

const SingleDitails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Id Name : {post.id} </h1>
      <h1>Details Of : {post.title} </h1>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default SingleDitails;
