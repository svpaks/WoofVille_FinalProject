import "./home.css"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Footer from "../footer/Footer";

export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${BASE_URL}/posts`);
      // console.log(res.data);
      setPosts(res.data);
    }
    fetchPosts();
  }, [BASE_URL]);
  return (
    <>        
      <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
