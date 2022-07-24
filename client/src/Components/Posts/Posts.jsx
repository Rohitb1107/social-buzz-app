import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import "./posts.css";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="prod-render-div">
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

{
  /* <div className="container text-center">
{posts.map((post) => (
  <div className="row" key={post._id}>
    <Post post={post} setCurrentId={setCurrentId} />
  </div>
))}
</div> */
}
