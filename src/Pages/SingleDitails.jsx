import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDitails = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div>
      <h1>Id Name : {post.id} </h1>
      <h1>Details Of : {post.title} </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SingleDitails;
