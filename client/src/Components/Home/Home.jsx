import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/posts";
import Form from "../Forms/Form";
import Posts from "../Posts/Posts";
import "./home.css";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="container main-home-div">
        <div className="title-div">Social-Buzz</div>
        <div className="container main-content">
          <div className="row col-row-div">
            <div className="col-8">
              <Posts setCurrentId={setCurrentId} />
            </div>
            <div className="col-4">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
