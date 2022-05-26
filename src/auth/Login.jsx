import React from "react";
import { Link } from "react-router-dom";
// import TextField from "@mui/material/Button";
import "./auth.css";

const Login = () => {
  return (
    <div className="main">
      <div className="card container wrapper">
        <div className="card-body">
          <form>
            <div className="heading">WELCOME ADMIN</div>
            <div className="input-field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control mb-2"
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                placeholder="********"
                className="form-control mb-3"
              />
            </div>
            <div className="btn">
              <Link to="/dashboard">
                <button className="btn btn-dark btn-block">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
