import React from "react";
import "./Post.css";
import { BsThreeDots, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";

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
              <span>
                {" "}
                <AiOutlineHeart size={25} />
              </span>
              <span>
                {" "}
                <RiChat3Line size={22} />
              </span>
              <span>
                {" "}
                <FaRegPaperPlane size={21} />
              </span>
            </div>
            <div className="bookmark">
              <BiBookmark size={22} />
            </div>
          </div>
          <div className="desc">
            <div className="likes">
              <span>10k Likes</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, veniam ipsum. Harum esse culpa repellendus repudiandae
            </div>
            <div className="time">
              <span>18 HOURS AGO</span>
            </div>
          </div>
          <div className="comment">
            <div className="emoji">
              <BsEmojiSmile size={25} />
            </div>
            <div className="comment-field">
              <input type="text" placeholder="Add a comment..." />
            </div>
            <div className="post-btn">
              <a href="#">Post</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
