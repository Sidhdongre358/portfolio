import React from "react";
import "./Services.css";

const Services = () => {
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
    <div id="services" className="services-container">
      {/* description */}
      <div className="services-description-container">
        <h1>
          My Awesome<span>Services</span>
        </h1>
        <p>
          As a full-stack web developer, I specialize in creating bespoke web
          applications, e-commerce solutions, and efficient database structures.
          With expertise in responsive design, API development, and robust
          security practices, I offer end-to-end solutions tailored to your
          unique needs. Whether you're seeking a custom CMS, technical guidance,
          or ongoing support, I bring a wealth of experience to elevate your
          online presence. Let's collaborate to bring your digital vision to
          life.
        </p>
        <button onClick={handleDownload} className="hire-me-btn">Hire Me</button>
      </div>
      <div className="services-list-container">
        {/* itmes */}
        <div className="services-items-container">
          <div className="services-item">
            <div className="item-description">
              <div className="item-heading">
                <i class="fas fa-code"></i>
                <h3>Custom Web Application Development</h3>
              </div>
              <p>
                Crafting tailored web applications that precisely meet your
                needs. From concept to implementation, we deliver scalable and
                robust solutions to elevate your digital presence.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="item-description">
              <div className="item-heading">
                <i class="fas fa-shopping-bag"></i>
                <h3>E-commerce Solutions:</h3>
              </div>
              <p>
                Transform your business into a thriving online marketplace with
                secure and feature-rich e-commerce solutions. From user-friendly
                interfaces to seamless payment gateways, we deliver end-to-end
                e-commerce development services.
              </p>
            </div>
          </div>
          <div className="services-item">
            <div className="item-description">
              <div className="item-heading">
                <i class="fas fa-cloud-upload-alt"></i>
                <h3>Deployment & Hosting</h3>
              </div>
              <p>
                Ensure a seamless online presence with our deployment and
                hosting expertise. We handle the hassle of setup and deployment,
                ensuring your web applications run smoothly on reliable hosting
                platforms. Trust us to optimize your digital footprint for a
                robust and reliable online experience.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
