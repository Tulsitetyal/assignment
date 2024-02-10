import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchingUsersDetails = async () => {
      try {
        const res = await axios.get("http://localhost:8081/getUserDetails");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchingUsersDetails();
  }, []);

  return (
    <div className="container mt-4 bg-primary" >
      <h2><strong>User Details</strong></h2>
      <table className="table table-striped table-bordered ">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>DOB</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
              <td>
                <button
                  className="btn btn-Success"
                 
                >
                  <Link to={`/update/${user.id}`} className="dark">Update</Link>
                 
                </button>
              </td>
            </tr>
          ))}
          <br></br>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
