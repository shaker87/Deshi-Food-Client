import React from "react";
import "./Cities.css";
import dhakaImg from "../../images/ciites/dhaka.jpg";
import ctgImg from "../../images/ciites/chittagong.webp";
import sylhetImg from "../../images/ciites/sylhet.jpg";
import coxImg from "../../images/ciites/coxbazar.jpg";
import savarImg from "../../images/ciites/savar.jpg";
import rajImg from "../../images/ciites/rajshahi.jpg";
import khulnaImg from "../../images/ciites/khulna.jpg";
import gazipurImg from "../../images/ciites/gazipur.jpg";
import cumillaImg from "../../images/ciites/cumilla.jpg";
import keaniganjImg from "../../images/ciites/keraniganj.jpg";
import { Link } from "react-router-dom";

function Cities() {
  const citiesData = [
    {
      bg: dhakaImg,
      name: "Dhaka",
    },
    {
      bg: ctgImg,
      name: "Chittagong",
    },
    {
      bg: sylhetImg,
      name: "Sylhet",
    },
    {
      bg: coxImg,
      name: "Cox's Bazar",
    },
    {
      bg: savarImg,
      name: "Savar",
    },
    {
      bg: rajImg,
      name: "Rajshahi",
    },
    {
      bg: khulnaImg,
      name: "Khulna",
    },
    {
      bg: gazipurImg,
      name: "Gazipur",
    },
    {
      bg: cumillaImg,
      name: "Cumilla",
    },
    {
      bg: keaniganjImg,
      name: "Keraniganj",
    },
  ];
  return (
    <section className="cities">
      <div className="container">
        <div className="cities-header">
          <h1>Find us in these cities and many more!</h1>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="cities-wrapper d-flex flex-wrap justify-content-center mt-3">
          {citiesData.map((city, index) => (
            <div
              className="city-box"
              style={{ backgroundImage: `url(${city.bg})` }}
            >
              <span class="cities-box-title">{city.name}</span>
              <Link to="#" class="cities-box-btn">
                <span class="fas fa-arrow-right"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cities;
