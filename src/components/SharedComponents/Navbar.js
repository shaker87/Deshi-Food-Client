import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../images/brand.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuToggle);
  console.log("menuToggle :>> ", menuToggle);

  useEffect(() => {
    // const isMobile = /Android|webOS|iPhone|Opera Mini/i.test(
    //   navigator.userAgent
    // );
    // console.log("isMobile :>> ", isMobile);

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
    <nav className={scrolled ? "header active" : "header"}>
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
        <img src={logo} alt="Brand" srcset="" />
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
          <li>Partner with us</li>
          <li>Ride with us</li>
          <li>Help & Support</li>

          <li>
            <button className="login">Login</button>
          </li>
          <li>
            <button className="signup">Signup</button>
          </li>
        </ul>
      </div>

      <div className="header-right">
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="login-signup">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </div>
    </nav>
  );
}
