import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navbar">
      <a className="navbar-logo">Port<span className="navbar-logo-white">folio</span> </a>
      <div className="navlink-container">
        <a className="navlink" href="#">
          Home
        </a>
        <a className="navlink" href="#">
          Profile
        </a>
        <a className="navlink" href="#">
          Skills
        </a>
        <a className="navlink" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}
