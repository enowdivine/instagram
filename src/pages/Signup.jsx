import React from "react";
import Signup from "../components/auth/signup/Signup";
import Footer from "../components/shared/Footer";
import "./Index.css";

const signup = () => {
  return (
    <div className="main">
      <div className="content">
        <div>
          <Signup />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default signup;
