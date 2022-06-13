import React, { useState } from "react";
import "./Status.css";

const Status = () => {
  const [status] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <div className="card status-main">
        <div className="card-body">
          <div className="all-status">
            {status.map((_, index) => (
              <div className="status" key={index}>
                <div className="profile-pic">
                  <img
                    src="https://randomuser.me/api/portraits/men/10.jpg"
                    alt=""
                  />
                </div>
                <div className="user-name">username</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
