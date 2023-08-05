import { useEffect, useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://the-story-sail-backend-2f38de10db81.herokuapp.com/posts",
        post
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);
  return (
    <div className="create">
      <h1 className="createPost">Create Blog</h1>
      <form className="createFrom">
        <div className="createFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="createTitle"
            autoFocus={true}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="createFormGroup">
          <input
            type="text"
            placeholder="Content"
            className="createContent"
            autoFocus={true}
            onChange={handleChange}
            name="content"
          />
        </div>
        <button className="createSubmit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
