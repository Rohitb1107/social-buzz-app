import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="container w-50">
      <div className="row">
        <img src={post.selectedFile} alt="" />
      </div>
      <div className="row">
        <div className="row">
          <div className="col">tags</div>
          <div className="col">
            <button
              className="btn btn-outline-info"
              onClick={() => setCurrentId(post._id)}
            >
              Edit
            </button>
          </div>
        </div>
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
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch(deletePost(post._id))}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
