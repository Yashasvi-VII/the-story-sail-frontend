import './Edit.css'
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
const Edit = () => {

     const navigate = useNavigate();
     const location = useLocation()
          const postId= location.pathname.split("/")[2];

     const [post, setPost] = useState({
          title:"",
          content:"",
     });
 

const handleChange = async e =>{
     setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
const handleClick = async (e) =>{
     e.preventDefault();
try {
     await axios.put(`http://localhost:7700/api/posts/${postId}`,post)
     navigate("/")
} catch (error) {
     console.log(error);
}
};
       
  return (
      <div className="edit">
      <h1 className="editPost">Edit Blog</h1>
      <form className="editForm">
           <div className="editFormGroup">
                <input type="text" placeholder="Title" className="editTitle" autoFocus={true}
                onChange={handleChange}
                name="title"/>
           </div>
           <div className="editFormGroup">
           <input type="text" placeholder="Content" className="editContent" autoFocus={true}
                onChange={handleChange}
                name="content"/>
           </div>
           <button className="editSubmit" onClick={handleClick}>Submit</button>
      </form>
     </div>
  )
}

export default Edit;