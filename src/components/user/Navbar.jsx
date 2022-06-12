import React from "react";

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
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
              <li>icon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
