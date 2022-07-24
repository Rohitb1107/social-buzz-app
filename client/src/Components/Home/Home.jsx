import React, { useEffect } from "react";
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
  }, [dispatch]);

  return (
    <>
      <div className="container title-head">
        <div className="title">Social-Buzz</div>
        <div className="container text-center main-content">
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
