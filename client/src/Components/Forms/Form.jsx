import React, { useState, useEffect } from "react";
import "./form.css";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    console.log(postData);

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div className="form-div">
      <div className="form-title">
        {currentId ? "Editing" : "Creating"} a post.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group w-75 container">
          <input
            name="creator"
            type="text"
            className="form-control my-4"
            placeholder="Creator"
            value={postData.creator}
            onChange={changeHandler}
          />

          <input
            name="title"
            type="text"
            className="form-control my-4"
            placeholder="Title"
            value={postData.title}
            onChange={changeHandler}
          />

          <textarea
            name="message"
            className="form-control my-4"
            rows="3"
            placeholder="Enter message"
            value={postData.message}
            onChange={changeHandler}
          ></textarea>

          <input
            name="tags"
            type="text"
            className="form-control"
            placeholder="Tags"
            value={postData.tags}
            onChange={changeHandler}
          />
          <div className="file-input-div my-2">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <button type="submit" className="btn btn-success w-100 my-2">
            Submit
          </button>
          <button onClick={clear} className="btn btn-danger w-100">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
