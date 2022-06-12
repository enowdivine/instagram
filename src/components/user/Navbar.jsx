import React from "react";
import "./Navbar.css";
import { MdHomeFilled } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { BiCompass } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="card ">
        <div className="card-body top-head container">
          <div className="brand">
            <img src="/images/instagram.png" alt="" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="icon-links">
            <ul>
              <li>
                <MdHomeFilled size={27} />
              </li>
              <li>
                <FaFacebookMessenger size={23} />
              </li>
              <li>
                <CgAddR size={25} />
              </li>
              <li>
                <BiCompass size={25} />
              </li>
              <li>
                <AiOutlineHeart size={25} />
              </li>
              <li>
                <img src="/images/facebook-logo.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
