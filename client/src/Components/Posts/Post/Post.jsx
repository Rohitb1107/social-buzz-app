import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../redux/actions/posts";
import "./post.css";
import editlogo from "../../../assests/edit.svg";
import deletelogo from "../../../assests/delete.svg";
import likelogo from "../../../assests/like.svg";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="post-card-div">
      <div className="row img-div">
        <img className="post-img" src={post.selectedFile} alt="" />
      </div>
      <div className="row other-part">
        <div className="row">
          <div className="col-6 tags-part">#love #actor</div>
          <div className="col-6 edit-part">
            <img
              className="editlogo"
              onClick={() => setCurrentId(post._id)}
              src={editlogo}
              alt=""
            />
          </div>
        </div>
        <div className="row creator-name">{post.creator}</div>
        <div className="row time-part">{moment(post.createdAt).fromNow()}</div>
        <div className="row title-part">{post.title}</div>
        <div className="row msg-part">{post.message}</div>
        <div className="row like-del-part">
          <div className="col-6">
            <edit />
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(likePost(post._id))}
            >
              <img className="editlogo" src={likelogo} alt="" />
              LIKE: {post.likeCount}
            </button>
          </div>
          <div className="col-6 delete-part">
            <img
              className="editlogo"
              onClick={() => dispatch(deletePost(post._id))}
              src={deletelogo}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
