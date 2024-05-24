import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <div>
            <p> 3054 SE 14th ST</p>

            <p> North Bend, WA 98045</p>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-425-395-6953
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mark.eaton95@gmail.com
            </h4>
          </div>
          <div></div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            My name is Mark Eaton. I'm a free spirit with a creative side. It is
            my dream to bring people together through my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
