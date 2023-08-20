import "./about.css"
import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import AboutDescription from "../../components/aboutDescription/AboutDescription";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

export default function About() {
  const headerImg = 'https://images.pexels.com/photos/7269591/pexels-photo-7269591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  return (
    <>        
      <Header aboutHeaderImg = {headerImg}/>
      <div className="about">
        <AboutDescription/>
        <Sidebar />
      </div>
    </>
  );
}
