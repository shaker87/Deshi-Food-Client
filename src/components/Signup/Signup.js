import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'

function Signup() {
  return (
    <div className="signup-area" style={{ paddingTop: "120px", paddingBottom:'100px' }}>
      <div className="container">
        <div
          className="w-100 mx-auto shadow p-4"
          action="#"
          method="POST"
          style={{ maxWidth: "600px" }}
        >
          <div className="form-group mb-5 text-md-center mt-1">
            <h2>Sign up now?</h2>
          </div>
          <div className="form-group">
            <div className="input-style position-relative px-3 py-2 d-flex">
              <span className="fas fa-user font-130 align-self-center color2"></span>
              <input
                className="flex-fill font1 border-0 focus-outline-0"
                type="text"
                name="userName"
                placeholder="Enter user name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="input-style position-relative px-3 py-2 d-flex">
                  <span className="fas fa-user font-130 align-self-center color2"></span>
                  <input
                    className="flex-fill  border-0 focus-outline-0"
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="input-style position-relative px-3 py-2 d-flex">
                  <span className="fas fa-user font-130 align-self-center color2"></span>
                  <input
                    className="flex-fill 1 border-0 focus-outline-0"
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-style position-relative px-3 py-2 d-flex">
              <span className="fas fa-envelope  align-self-center color2"></span>
              <input
                className="flex-fill  border-0 focus-outline-0"
                type="text"
                name="email"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-style position-relative px-3 py-2 d-flex">
              <span className="fas fa-phone  align-self-center color2"></span>
              <input
                className="flex-fill border-0 focus-outline-0"
                type="text"
                name="number"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="input-style position-relative px-3 py-2 d-flex">
                  <span className="fas fa-lock  align-self-center color2"></span>
                  <input
                    className="mx-1 flex-fill border-0 focus-outline-0"
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                  />
                  <span className="fas fa-eye-slash text-dark align-self-center cursor-pointer"></span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-style position-relative px-3 py-2 d-flex">
                  <span className="fas fa-lock  align-self-center color2"></span>
                  <input
                    className="mx-1 flex-fill border-0 focus-outline-0"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter confirm password"
                  />
                  <span className="fas fa-eye-slash text-dark align-self-center cursor-pointer"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mt-4 pt-3 mb-3">
            <input
              className="btn btn-danger bg-color1 btn-lg w-100"
              type="submit"
              name="signup"
              value="Sign up"
            />
            <div className="text-right mt-1">
              <Link to="#" className="text-dark">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="form-group text-center">
            <strong className="text-dark mb-3 pt-2 d-block">
              Already Registered Yet?
            </strong>
            <Link to="/login" className="btn btn-danger bg-color1 btn-lg w-100">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
