import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../images/brand.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenu = () => setMenuToggle(!menuToggle);


  useEffect(() => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 25) {
        return setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, menuToggle]);

  return (
    <nav className={scrolled || location.pathname === "/login" || location.pathname === "/signup"
     ? "header active" : "header"}>
      <div className="menu-toggle-icon">
        <input
          type="checkbox"
          name=""
          id="menu-btn"
          className={toggleMenu ? "menu" : ""}
        />
        <label onClick={toggleMenu} class="menu-icon" for="menu-btn">
          <span class="nav-icon"></span>
        </label>
      </div>

      <div className="brand-logo">
        <Link to="/home">
          <img src={logo} alt="Brand" srcset="" />
        </Link>
      </div>

      <div
        className={
          menuToggle
            ? "menu mobile-menu-active"
            : scrolled
            ? "menu menu-active"
            : "menu"
        }
      >
        <div className="close-btn" onClick={toggleMenu}>
          <i class="fas fa-times"></i>
        </div>
        <ul>
          <li>About Us</li>
          <li>Team</li>
          <li>Careers</li>
          <li>
            <Link to="/signup" className="menu-item">
              Partner with us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="menu-item">
              Ride with us
            </Link>
          </li>
          <li>Help & Support</li>

          <li>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="signup">Signup</button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="login-signup">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
