import React from "react";
import "./Users.css";
import Sidebar from "../../components/Sidebar";
import { AiFillBell } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import ActiveUsers from "../../components/users/active/ActiveUsers";
import InActiveUsers from "../../components/users/inactive/InActiveUsers";

const Users = () => {
  return (
    <div>
      <div className="top-bar bg-dark">
        <nav>
          <ul>
            <li>
              <Sidebar />
            </li>
            <li className="heading">
              INFOCMR <span className="text-danger">USERS</span> STATISTICS
            </li>
          </ul>
          <ul>
            <li className="notification">
              <AiFillBell size={25} />
            </li>
            <li className="mt-1">
              <CgMenuGridR size={30} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="activeUsers-tab"
              data-bs-toggle="tab"
              data-bs-target="#activeUsers-tab-pane"
              type="button"
              role="tab"
              aria-controls="activeUsers-tab-pane"
              aria-selected="true"
            >
              Active Users
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="inactveUsers-tab"
              data-bs-toggle="tab"
              data-bs-target="#inactveUsers-tab-pane"
              type="button"
              role="tab"
              aria-controls="inactveUsers-tab-pane"
              aria-selected="false"
            >
              Suspended Users
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="activeUsers-tab-pane"
            role="tabpanel"
            aria-labelledby="activeUsers-tab"
            tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <ActiveUsers />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="inactveUsers-tab-pane"
            role="tabpanel"
            aria-labelledby="inactveUsers-tab"
            tabindex="0"
          >
            <div className="card">
              <div className="card-body">
                <InActiveUsers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
