import React from "react";
import "./OwnVehicle.css";
import vehicleBg from "../../images/vehicle-background.png";
import vehicleCycle from "../../images/cycle-delivery.png";
import vehicleBike from "../../images/delivery-bike.png";
import { Link } from "react-router-dom";

function OwnVehicle() {
  return (
    <div className="own-vehicle">
      <div className="vehicle-background">
        <div className="row">
          <div className="col-md-6">
            <img className="vehicle-img" src={vehicleBg} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-vehicle px-md-5">
              <img  height="170px" src={vehicleCycle} alt="" srcset="" />
              <img  height="181px" src={vehicleBike} alt="" srcset="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="own-content">
              <h2 className="">
                <span className="color1">Own a Vehicle?</span> <br />
                <span className="color2">Join our Fleet Partner Network</span>
              </h2>
              <p>
              Transform your vehicle into an earning machine. Simply register with us for an <br /> opportunity to earn while you Ride, Drive or Pedal your ways across the city.
              </p>
              <ul className="mt-4 ml-3 vehicle-list-item">
                <li>The freedom to give the service whenever you want</li>
                <li>Earn extra with daily quests and special offers</li>
                <li>Always get your peyment right on time!</li>
              </ul>
              <Link to="#"><button className="btn become-partner-btn">Become  Partner</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnVehicle;
