import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validate from "./Signup_Validation";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    dob: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    if (
      errors.firstName === "" &&
      errors.lastName === "" &&
      errors.email === "" &&
      errors.age === "" &&
      errors.dob === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h3 ><strong>Sign Up</strong></h3>
        <br />
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <span className="text-danger">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleInput}
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              onChange={handleInput}
              className="form-control"
              name="age"
              id="age"
              placeholder="Enter your age"
            />
            {errors.age && (
              <span className="text-danger">{errors.age}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="dob">DOB</label>
            <input
              type="text"
              onChange={handleInput}
              className="form-control"
              name="dob"
              id="dob"
              placeholder="Enter your Date of Birth"
            />
            {errors.dob && (
              <span className="text-danger">{errors.dob}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={handleInput}
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
          <p className="mt-3">
            By signing up, you agree to our terms and policies
          </p>
          <Link to="/" className="btn btn-outline-success mt-3">
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
