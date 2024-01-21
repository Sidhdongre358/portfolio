import React from "react";
import "./Header.css";
import Typical from "react-typical";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";

import profileImage from "./images/profile.png";

const Header = () => {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Resume-jan.pdf"; // Adjust the file name accordingly
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="header-container">
      {/* Header content */}
      <div className="header-content">
        <h1> Hi! Am</h1>
        <h2 className="fullname">Sid..</h2>
        <h2 className="typingtext">
          I'm a {"   "}
          <Typical
            steps={[
              "Full Stack Developer 💻🛠️ ",
              2000,
              "Backend Developer... ",
              2000,
              "React Developer ⚛️ ",
              2000,
              "Traveller ♥︎ ",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Hi there! I'm Sidarth, a passionate and dedicated full-stack developer
          based in Pune. With a love for creating robust and user-friendly web
          applications, I specialize in both front-end and back-end
          technologies. My journey in the world of coding began with a curiosity
          for crafting digital experiences, and it has evolved into a fulfilling
          career.
        </p>
        {/* Payment links */}

        <div className="header-payment-container">
          <button className="hire-me-btn" onClick={handleDownload}>
            Hire Me
          </button>

          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>

          <i className="fa-brands fa-cc-mastercard"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={pic3} alt="profile image" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
