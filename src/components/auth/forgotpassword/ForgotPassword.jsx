import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = ({ signup, login }) => {
  return (
    <div className="main">
      <div className="content">
        <div className="card">
          <div className="card-body">
            <h4>Trouble Logging In?</h4>
            <p>
              Enter your email, phone, or username and we'll send you a link to
              get back into your account.
            </p>
            <form>
              <div className="input">
                <input type="text" placeholder="Email, Phone, or Username" />
              </div>
              <button>Send Login Link</button>
            </form>
            <div className="or">
              <p>OR</p>
            </div>
            <div className="signup-link">
              <Link to="/signup">Create New Account</Link>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/">Back To Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
