import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Post from "../../components/user/Post";
import SideContent from "../../components/user/SideContent";
import "./User.css";

const Homapage = () => {
  const [posts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="homepage-main">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="group">
          <div className="all-posts">
            {posts.map((_, index) => (
              <Post key={index} />
            ))}
          </div>
          <div className="sidecontent">
            <SideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homapage;
