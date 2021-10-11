import React from "react";
import "./WhyChoose.css";

import choose1 from "../../images/choose.png";
import choose2 from "../../images/fast-delivery.png";
import choose3 from "../../images/enjoy.png";
import arrowUp from "../../images/arrow-up-right.png";
import arrowDown from "../../images/arrow-down-right.png";

function WhyChoose() {
  return (
    <div className="why-choose">
      <div className="container ">
        <div className="choose-bg">
          <div className="row ">
            <div className="col-md-12">
              <div className="why-choose-title">
                <h2>Why We're Best ?</h2>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="choose-box">
              <img src={choose1} alt="" srcset="" />
              <h3>Choose</h3>
              <p>
                Find your favorite among the thousands of restaurants in our
                app.
              </p>
            </div>
            <div className="choose-arrow">
              <img src={arrowUp} alt="" srcset="" />
            </div>
            <div className="choose-box">
              <img src={choose2} alt="" srcset="" />
              <h3 className="fast-delivery-highlight-text">Fast Delivery</h3>
              <p>
              Get your food delivered in less then an hour! That's as fast as it can get.
              </p>
            </div>
            <div className="choose-arrow">
              <img src={arrowDown} alt="" srcset="" />
            </div>
            <div className="choose-box">
              <img src={choose3} alt="" srcset="" />
              <h3>Enjoy</h3>
              <p>
              Get the best offers and combos at the best price only at deshifood
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
