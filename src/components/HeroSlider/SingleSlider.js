import React from "react";
import { Link } from "react-router-dom";
import "./SingleSlider.css";

function SingleSlider({ totalData, handleToggle }) {
  const { bg, bannerImage } = totalData;
  return (
    <div className="slider-area">
      <div className="slide" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex-area">
                <div className="slider-content">
                  <h1>
                    Fastest <br /> <span className="color1"> Delivery</span> &{" "}
                    <br /> Easy
                    <span className="color1"> Pickup</span>
                  </h1>
                  <div className="btn-group">
                    <button className="btn-header" type="button">
                      <span className="fas fa-search"></span>
                      <span className="btn-text">Find Restaurants</span>
                    </button>
                    <Link onClick={handleToggle}
                      to="#"
                      className="how-to-order d-flex align-items-center text-black position-relative"
                   
                    >
                      <button 
                        type="button"
                        className="btn btn-md btn-header1 shadow rounded-circle position-relative"
                      >
                        <span className="fas fa-play"></span>
                      </button>
                      <span className="how-span-text">How to order</span>
                      <div className="red-half-round"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-image text-center">
                <img className="img-fluid" src={bannerImage} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default SingleSlider;
