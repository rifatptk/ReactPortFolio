import React from "react";
import Typed from "react-typed";
import "./Profile.css";
import me from "../../assets/Home/me.jpg";
import shape from "../../assets/Home/shape-bg.png";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a target="_blank" href="https://www.facebook.com/rifatptk">
              <i className="fa-brands fa-facebook-square"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/rifatptk/">
              <i className="fa-brands fa-instagram-square"></i>
              </a>
              <a target="_blank" href="https://github.com/rifatptk">
                <i className="fa-brands fa-github-square"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/rifatptk/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Rifat</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typed
                  strings={[
                    "Enthusiastic Developer 👨‍💻",
                    "Full Stack Developer 🚗",
                    "MERN Stack Developer 📺",
                    "Cross Platform Developer",
                    "React/ React-Native Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
              <span className="profile-role-tagline">
                Experienced frontend and backend Developer. Just knock and have
                a blast.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me </button>
            <a href="./Resume.pdf" download={"Rifat's Resume.pdf"}>
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <img className="profile-picture-me" src={me} />
        </div>
      </div>
      <img src={shape} className="shape" />
    </div>
  );
}
