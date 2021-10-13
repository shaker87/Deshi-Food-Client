import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import paymentImg from "../../../images/SSL-Commerz-Pay-With.png";
import googlePlay from "../../../images/android.png";
import apple from "../../../images/apple.png";

function Footer() {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-box">
              <h5>Download</h5>
              <img
                style={{ maxHeight: "50px", marginBottom: "10px", marginTop:'5px' }}
                src={googlePlay}
                alt=""
                srcset=""
              />
              <img style={{ maxHeight: "50px" }} src={apple} alt="" srcset="" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-box">
              <h5>Contact Us</h5>
              <div className="contact-box">
                <span>Head Office:</span>
                <p>Sumi Tower, Mirpur-1, Dhaka</p>
              </div>
              <div className="contact-box">
                <span>Phone:</span>
                <p>+88 01888-888888</p>
              </div>
              <div className="contact-box">
                <span>Email:</span>
                <p>deshifood@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-box">
              <h5>Useful Links</h5>
              <div className="useful-links">
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="link-item"
                      style={{ textDecoration: "none" }}
                    >
                      Help & Supports
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="footer-box">
              <h5>Get In Touch</h5>
              <div className="social-icon">
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="social-link-item"
                      style={{ textDecoration: "none" }}
                    >
                      <i class="fab fa-facebook-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="social-link-item"
                      style={{ textDecoration: "none" }}
                    >
                      <i class="fab fa-instagram-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="social-link-item"
                      style={{ textDecoration: "none" }}
                    >
                      <i class="fab fa-youtube-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="social-link-item"
                      style={{ textDecoration: "none" }}
                    >
                      <i class="fab fa-twitter-square"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pay-box">
                <span>We Accept:</span>
                <img className="img-fluid" src={paymentImg} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="hr"></div>

          <div className="right-reserve">
            <p class="text-center text-light pb-5 mb-0">
              © 2020-<span id="currentYear">2021</span> deshifood{" "}
              <span class="square-dot">. </span> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
