import "./SinglePost.css";
import Sample from "../../images/moutain.jpeg";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:7700/api/posts/" + postId
        );
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  console.log(location.pathname.split("/")[2]);
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:7700/api/posts/" + id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      {posts.map((post) => (
        <div className="singlePostWrapper">
          <img className="singlePostImg" src={Sample} alt="sample image" />
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
              <button className="singlePostEditIcon">
                {" "}
                <Link to={`/edit/${post.id}`}>Update</Link>
              </button>
              <button
                className="singlePostDeleteIcon"
                onClick={() => handleDelete(post.id)}
              >
                {" "}
                Delete
              </button>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostDate">{post.createdAt}</span>
          </div>
          <p className="singlePostDesc">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SinglePost;
