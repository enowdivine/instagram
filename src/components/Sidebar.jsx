import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDashboard, MdWork } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { RiAdvertisementFill } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <button
        className="btn btn-outline-light"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <HiMenuAlt1 />
      </button>
      <div
        className="offcanvas offcanvas-start bg-dark"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            INFO<span className="text-danger">CMR</span> ADMIN
          </h5>
          <button
            type="button"
            className="btn-close text-reset btn-outline-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="sidebar-body">
            <li>
              <span className="icon">
                <MdDashboard size={25} />
              </span>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <span className="icon">
                <ImUsers size={25} />
              </span>
              <Link to="/users">USERS</Link>
            </li>
            <li>
              <span className="icon">
                <MdWork size={25} />
              </span>
              <Link to="/institutions">INSTITUTIONS</Link>
            </li>
            <li>
              <span className="icon">
                <RiAdvertisementFill size={25} />
              </span>
              <Link to="/ads">ADVERTS</Link>
            </li>
            <li>
              <span className="icon">
                <BiMoney size={25} />
              </span>
              <Link to="/income">INCOME</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
