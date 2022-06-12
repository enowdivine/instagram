import React from "react";
import Navbar from "../../components/user/Navbar";
import Post from "../../components/user/Post";
import "./User.css";

const Homapage = () => {
  return (
    <div className="homepage-main">
      <Navbar />
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Homapage;
