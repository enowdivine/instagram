import React, { useState } from "react";
import UserModal from "../../modal/UserModal";
import "./ActiveUsers.css";

const ActiveUsers = () => {
  const [activeUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [userDetails, setUserDetails] = useState(false);

  return (
    <div>
      <div className="search">
        <input type="text" className="form-control" placeholder="Search user" />
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers.map((_, index) => (
            <tr key={index} onClick={() => setUserDetails(true)}>
              <td>Mark Jordan</td>
              <td>+237 672491296</td>
              <td>infocmrtest@gmail.com</td>
              <td className="text-success">Active</td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserModal show={userDetails} onHide={() => setUserDetails(false)} />
    </div>
  );
};

export default ActiveUsers;
