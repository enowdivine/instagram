import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = ({ login }) => {
  return (
    <div className="wrapper">
      <div className="card auth-card">
        <div className="card-body">
          <div className="logo">
            <img src="/images/instagram.png" alt="" />
          </div>
          <div className="facebook-signup">
            <h3>Sign up to see photos and videos from your friends.</h3>
            <button>
              <img src="/images/facebook-white.png" alt="" /> Log in with
              Facebook
            </button>
          </div>
          <div className="or">
            <p>OR</p>
          </div>
          <form>
            <div className="input">
              <input type="text" placeholder="Mobile Number or email" />
            </div>
            <div className="input">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="info-text">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram. <a href="#">Learn More</a>
              </p>
              <p>
                By signing up, you agree to our <a href="#">Terms</a> ,
                <a href="#"> Data Policy</a> and <a href="#">Cookies Policy</a>{" "}
                .
              </p>
            </div>
            <div className="login-btn">
              <button>Sign up</button>
            </div>
          </form>
        </div>
      </div>
      <div className="card signup-card mt-2">
        <div className="card-body">
          <p>
            Have an account? <Link to="/">Log in</Link>
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

export default Signup;
