import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light alert-dark">
    <a className="navbar-brand" href="/">
      <div className="row ml-2 mr-5">
        <i className="fas fa-video fa-2x my-auto" />
        <div className="h4 text-dark ml-2 my-auto">React-Redux MovieCard</div>
      </div>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#menu"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item" style={{ borderRight: "0.5px solid #F4F0F0" }}>
          <div className="nav-link">
            <NavLink to="/" exact className="navlink">
              Home
            </NavLink>
          </div>
        </li>
        <li className="nav-item" style={{ borderRight: "0.5px solid #F4F0F0" }}>
          <div className="nav-link">
            <NavLink to="/popular" className="navlink">
              Popular
            </NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <NavLink to="upcoming" className="navlink">
              Upcoming
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
