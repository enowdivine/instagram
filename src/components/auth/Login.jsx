import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="card auth-card">
        <div className="card-body">
          <div className="logo">
            <img src="/images/instagram.png" alt="" />
          </div>
          <form>
            <div className="input">
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="login-btn">
              <button>Log In</button>
            </div>
          </form>
          <div className="or">
            <p>OR</p>
          </div>
          <div className="options">
            <div className="facebook">
              <a href="#">Log in with Facebook</a>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
      <div className="card signup-card">
        <div className="card-body">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <div className="get-app">
        <p>Get the app.</p>
        <div className="get-app-link">
          <a className="m-1" href="#">
            <img src="/images/app-store.png" alt="app store" />
          </a>
          <a className="m-1" href="#">
            <img src="/images/play-store.png" alt="play store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
