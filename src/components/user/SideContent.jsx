import React from "react";
import "./SideContent.css";
import { useState } from "react";

const SideContent = () => {
  const [suggestions] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="sidecontent">
      <div className="profile">
        <div className="image">
          <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
          <div className="name">
            <div className="username">username</div>
            <div className="actual-name">Enow Divine</div>
          </div>
        </div>
        <div className="switch">
          <span>
            <a href="#">switch</a>
          </span>
        </div>
      </div>
      <div className="suggestions">
        <div className="for-you">
          <p>Suggestion For You</p>
          <a href="#">See All</a>
        </div>
        {suggestions.map((_, index) => (
          <div key={index} className="profile mb-2">
            <div className="image">
              <img
                src="https://randomuser.me/api/portraits/men/13.jpg"
                alt=""
              />
              <div className="name">
                <div className="username">username</div>
                <div className="actual-name">Followed by other_user</div>
              </div>
            </div>
            <div className="switch">
              <span>
                <a href="#">Follow</a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="side-links">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Language</a>
          </li>
        </ul>
        <p>&copy; 2022 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default SideContent;
