import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/posts";
import "./post.css";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="post-card-div">
      <div className="row img-part">
        <img src={post.selectedFile} alt="" />
      </div>
      <div className="row other-part">
        <div className="row">
          <div className="col-6">tags</div>
          <div className="col-6">
            <button
              className="btn btn-outline-info"
              onClick={() => setCurrentId(post._id)}
            >
              Edit
            </button>
          </div>
        </div>
        <div className="row creator-name">{post.creator}</div>
        <div className="row time-part">{moment(post.createdAt).fromNow()}</div>
        <div className="row title-part">{post.title}</div>
        <div className="row msg-part">{post.message}</div>
        <div className="row like-del-part">
          <div className="col-6">
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(likePost(post._id))}
            >
              LIKE: {post.likeCount}
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
