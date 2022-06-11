import React from "react";
import Login from "../components/auth/Login";
import "./Index.css";

const Index = () => {
  return (
    <div className="main">
      <div className="content">
        <div>
          <Login />
        </div>
        <div className="links">
          <div className="container">
            <ul>
              <li>
                <a href="#">Meta</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Top Accounts</a>
              </li>
              <li>
                <a href="#">Hashtags</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Instagram Lite</a>
              </li>
              <li>
                <a href="#">Contact Uploading & Non-User</a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>English | @2022 Instagram from Meta</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
