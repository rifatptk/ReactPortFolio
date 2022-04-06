import React from "react";
import Typed from "react-typed";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/rifatptk">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/rifatptk/">
              <i className="fa fa-instagram-square"></i>
            </a>
            <a href="https://github.com/rifatptk">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/rifatptk/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter-square"></i>
            </a>
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
                    "Enthusiastic Dev 👨‍💻",
                    "Full Stack Developer 🚗",
                    "MERN Stack dev 📺",
                    "Cross Platform Dev",
                    "React/ React-Native Dev",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
