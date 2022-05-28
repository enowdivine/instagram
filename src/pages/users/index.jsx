import React from "react";
import Sidebar from "../../components/Sidebar";
import { AiFillBell } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";

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
    </div>
  );
};

export default Users;
