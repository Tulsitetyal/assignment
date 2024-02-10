import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    dob: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/getUserDetails/${userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/editUserDetail/${userId}`, user);
      setError(false); // Reset error state
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the User Details</h1>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="DOB"
        name="dob"
        value={user.dob}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/profile">Cancel</Link>
    </div>
  );
};

export default Update;
