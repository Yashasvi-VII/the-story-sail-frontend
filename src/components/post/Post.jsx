import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
import Sample from "../../images/Sample.jpg";
import { Link } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          "https://the-story-sail-backend-2f38de10db81.herokuapp.com/api/posts"
        );
        console.log(res);
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="post">
      {posts.map((post) => (
        <div className="postInfo">
          <div className="postCats">
            <h2 className="postTitle">{post.title}</h2>
          </div>
          <p className="postDescription">{post.content}</p>
          <div className="postAction">
            <button className="readMore">
              <Link to={`/blogPost/${post.id}`} className="link">
                Read More
              </Link>
            </button>
            <span className="postDate">{post.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
