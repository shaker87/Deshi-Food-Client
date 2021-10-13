import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-area" style={{ paddingTop: "120px", paddingBottom:'100px' }}>
      <div className="container">
        <div
          className="w-100 mx-auto shadow p-4 login-form"
          style={{ maxWidth: "480px" }}
        >
          <div className="form-group mb-5 text-md-center mt-1">
            <h2>Sign in now?</h2>
          </div>
          <div className="form-group">
            <div className="input-style position-relative px-3 py-3 d-flex">
              <span className="mr-3 fas fa-envelope font-130 align-self-center color2"></span>
              <input
                className="flex-fill font1 border-0 focus-outline-0"
                type="text"
                name="email"
                placeholder="Email Or Phone Number"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-style px-3 position-relative py-3 d-flex">
              <span className="fas fa-lock font-130 align-self-center color2"></span>
              <input
                className="flex-fill font1 border-0 focus-outline-0"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="pwd cursor-pointer font-130 fas text-dark align-self-center fa-eye-slash"></span>
            </div>
          </div>
          <div className="form-group mt-4 pt-3 mb-3">
            <input
              className="btn btn-danger bg-color1 btn-lg w-100"
              type="submit"
              name="signin"
              value="Sign in"
            />
            <div className="text-right mt-2">
              <Link
                to="#"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="form-group text-center">
            <strong className="text-dark mb-3 pt-2 d-block font-105">
              Not Registered Yet?
            </strong>
            <Link to="/signup" className="btn btn-danger bg-color1 btn-lg w-100">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
