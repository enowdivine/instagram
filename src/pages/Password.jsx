import React from "react";
import ForgotPassword from "../components/auth/forgotpassword/ForgotPassword";
import Footer from "../components/shared/Footer";
import "./Index.css";

const Password = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="card-body">
          <div className="image">
            <img src="/images/instagram.png" alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div>
          <ForgotPassword />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Password;
