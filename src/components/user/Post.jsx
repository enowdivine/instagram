import React, { useState } from "react";
import "./Post.css";
import { BsThreeDots, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegPaperPlane, FaBookmark } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import Modal from "./Modal";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Post = () => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [option, setOption] = useState(false);

  return (
    <div className="posts mb-2">
      <div className="card">
        <div className="profile">
          <div className="image">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
            <p>facebook_username</p>
          </div>
          <div className="option">
            <span onClick={() => setOption(true)}>
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
              <span className="like">
                {like ? (
                  <span className="liked">
                    <AiFillHeart size={25} onClick={() => setLike(false)} />
                  </span>
                ) : (
                  <AiOutlineHeart size={25} onClick={() => setLike(true)} />
                )}
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
              {bookmark ? (
                <FaBookmark size={22} onClick={() => setBookmark(false)} />
              ) : (
                <BiBookmark size={22} onClick={() => setBookmark(true)} />
              )}
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
      <Modal show={option} onHide={() => setOption(false)} />
    </div>
  );
};

export default Post;
