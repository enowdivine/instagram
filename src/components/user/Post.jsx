import React from "react";
import { BsThreeDots, BsChat, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";

const Post = () => {
  return (
    <div className="posts">
      <div className="card">
        <div className="profile">
          <div className="image">
            <img src="/images/facebook-logo.png" alt="" />
            <p>facebook_username</p>
          </div>
          <div className="option">
            <span>
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className="content">
          <div className="post">
            <img src="/images/facebook-logo.png" alt="" />
          </div>
          <div className="actions">
            <div className="action">
              <AiOutlineHeart />
              <BsChat />
              <FaRegPaperPlane />
            </div>
            <div className="bookmark">
              <BsBookmark />
            </div>
          </div>
          <div className="desc">
            <div className="likes">
              <span>10k likes</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, veniam ipsum. Harum esse culpa repellendus repudiandae
              nesciunt. Nam odit eligendi iste voluptate laboriosam delectus,
              tenetur, commodi in quasi, quis possimus.
            </div>
            <div className="time">
              <span>18 HOURS AGO</span>
            </div>
          </div>
        </div>
        <div className="comment">comments</div>
      </div>
    </div>
  );
};

export default Post;
