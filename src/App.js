import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./pages/home/Home";
import BlogPost from "./pages/blogpost/BlogPost.jsx";
import Create from "./pages/create/Create.jsx";
import Edit from "./pages/edit/Edit.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/blogPost/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
