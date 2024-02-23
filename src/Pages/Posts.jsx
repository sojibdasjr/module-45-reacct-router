import { useLoaderData } from "react-router-dom";
import SinglePost from "../components/SinglePost";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Our total Post : {posts.length} </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {posts.map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
