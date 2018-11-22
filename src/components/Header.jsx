import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        <div className="row ml-2 mr-3">
          <i className="fas fa-video fa-2x my-auto text-white" />
          <div className="h4 text-white ml-2 my-auto">MovieCards</div>
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
          <li
            className="nav-item"
            style={{ borderRight: "0.5px solid #F4F0F0" }}
          >
            <div className="nav-link">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="navlink"
              >
                Home
              </NavLink>
            </div>
          </li>
          <li
            className="nav-item"
            style={{ borderRight: "0.5px solid #F4F0F0" }}
          >
            <div className="nav-link">
              <NavLink
                to="/popular"
                activeClassName="active"
                className="navlink"
              >
                Popular
              </NavLink>
            </div>
          </li>
          <li
            className="nav-item"
            style={{ borderRight: "0.5px solid #F4F0F0" }}
          >
            <div className="nav-link">
              <NavLink
                to="/upcoming"
                activeClassName="active"
                className="navlink"
              >
                Upcoming
              </NavLink>
            </div>
          </li>
          <li className="nav-item mr-2">
            <div className="nav-link">
              <NavLink
                to="/search"
                activeClassName="active"
                className="navlink"
              >
                Search
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
