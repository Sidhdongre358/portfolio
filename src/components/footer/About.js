import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="Address">
        <p>BlueStar solutions, Hinjewadi Phase 1, Pune, India </p>
      </div>
      <ul className="social-media">
        <li>
          <a href="">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="copyright">
        <span>
          CopyRight <i className="fa fa-copyright"></i>
          2024
        </span>
      </div>
    </div>
  );
};

export default About;
