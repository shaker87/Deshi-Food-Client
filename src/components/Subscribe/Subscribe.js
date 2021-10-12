import React from "react";
import "./Subscribe.css";
import foodImg from "../../images/food-image.png";

function Subscribe() {
  return (
    <>
      <div className="subscribe-area">
        <div className="container food-image-wrapper">
          <img className="food-img" src={foodImg} alt="" srcset="" />
        </div>
      </div>
      <div className="subscribe-form">
        <div className="container">
          <div className="col-md-10 offset-md-1">
            <div className="subscribe-form-box">
              <h2 class="color1">Get Our Special Offer!</h2>
              <p>
                Input your email address and complete subscriptions to get our
                special offers.
              </p>
              <div className="input-field">
                <input type="text" placeholder="Enter your email here..." />
                <button className="submit-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
