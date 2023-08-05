import './Home.css';
import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import SideBar from "../../components/sidebar/SideBar.jsx";

const  Home = () => {

  return (
     <>
     <Header/>
     <div className="home">
<Posts/>
<SideBar/>
     </div>
     </>

  )
}

export default Home; // Export Home as the default export