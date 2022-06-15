import React from "react";
import "./AccountLayout.css";
import SideContent from "../components/user/SideContent";

const AccountLayout = ({ children }) => {
  return (
    <div>
      <div className="layout-wrapper container">
        <div className="children-wrapper">{children}</div>
        <div className="suggestions">
          <SideContent />
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
