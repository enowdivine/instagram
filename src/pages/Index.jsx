import React from "react";
import Login from "../components/auth/login/Login";
import Footer from "../components/shared/Footer";
import "./Index.css";

const Index = () => {
  return (
    <div className="main">
      <div className="content">
        <div>
          <Login />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
