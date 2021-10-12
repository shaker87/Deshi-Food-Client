import React from "react";
import "./OwnItems.css";
import restaurantImage from '../../images/restaurent.png';
import { Link } from "react-router-dom";

function OwnItems() {
  return (
    <div className="own-items">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="own-content">
              <h2 className="">
                <span className="color1">Own a Restaurant?</span> <br />
                <span className="color2">Join our Food Merchant Network</span>
              </h2>
              <p>
                Reach out to a wider set to customers and enhance your revenues
                with <br /> takeaways powered by dFood delivery platform.
              </p>
              <ul className="mt-4 ml-3 list-item">
                <li>Get your food featured</li>
                <li>Enjoy an exposure to a huge customer base</li>
                <li>Increase your sales through collaborative campaingns</li>
              </ul>
              <Link to="#"><button className="btn become-partner-btn">Become  Partner</button></Link>
            </div>
          </div>
          <div className="col-md-6">
              <div className="own-right-content">
                  <img className="img-fluid" src={restaurantImage} alt="" srcset="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnItems;
