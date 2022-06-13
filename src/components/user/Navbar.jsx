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
              <li
                className=" dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt=""
                />
              </li>
              <div class="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  Action
                </button>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
