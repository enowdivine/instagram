import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillThunderbolt } from "react-icons/ai";
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
                <AiFillThunderbolt size={20} />
              </span>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <span className="icon">
                <AiFillThunderbolt size={20} />
              </span>
              <Link to="/users">USERS</Link>
            </li>
            <li>
              <span className="icon">
                <AiFillThunderbolt size={20} />
              </span>
              <Link to="/institutions">INSTITUTIONS</Link>
            </li>
            <li>
              <span className="icon">
                <AiFillThunderbolt size={20} />
              </span>
              <Link to="/ads">ADVERTS</Link>
            </li>
            <li>
              <span className="icon">
                <AiFillThunderbolt size={20} />
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
