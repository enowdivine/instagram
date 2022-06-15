import React, { useState } from "react";
import Navbar from "../../components/user/Navbar";
import Post from "../../components/user/Post";
import Status from "../../components/user/Status";
import AccountLayout from "../../layouts/AccountLayout";
import "./User.css";

const Homapage = () => {
  const [posts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="homepage-main ">
      <div className="navigation">
        <Navbar />
      </div>
      <AccountLayout>
        <Status />
        <div>
          {posts.map((_, index) => (
            <Post key={index} />
          ))}
        </div>
      </AccountLayout>
    </div>
  );
};

export default Homapage;
