import React from "react";
import { useState } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [btn, setBtn] = useState("Menu");
  const handleMenuToggle = () => {
    setIsMobile(!isMobile);
    if (!isMobile) {
      setBtn("X");
    } else {
      setBtn("MENU");
    }
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Logo</span>
      </div>
      <div className="menu">
        <button className={` menu-icon `} onClick={handleMenuToggle}>
          {btn}
        </button>
        {/*  {/* Create links to scroll to the sections */}

        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={600}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={600}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={600}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={600}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
