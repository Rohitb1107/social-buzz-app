import React from "react";
import moment from "moment";

const Post = ({ post }) => {
  console.log(post.tags.length);
  return (
    <div className="container col-6">
      <div className="row">
        <img src={post.selectedFile} alt="" />
      </div>
      <div className="row">
        <div className="row">{post.tags.map((x) => `#${x} `)}</div>
        <div className="row">{post.creator}</div>
        <div className="row">{moment(post.createdAt).fromNow()}</div>
        <div className="row">{post.title}</div>
        <div className="row">{post.message}</div>
        <div className="row">
          <div className="col-6">
            <button className="btn btn-outline-primary">
              {post.likeCount}
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-outline-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
