import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Layouts.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__container">
        <ul className="navBar__menu">
        <li className="navBar__item">
            <Link to="/" className="navBar__links" id="home-page">
              Search for people
            </Link>
          </li>

          <li className="navBar__item">
            <Link to="/add-announcement" className="navBar__links" id="add-announcement-page">
              Add announcement
            </Link>
          </li>

          <li className="navBar__item">
            <Link to="/search-groups" className="navBar__links" id="search-groups-page">
              Search for groups
            </Link>
          </li>

          <li className="navBar__item">
            <Link to="/add-group" className="navBar__links" id="add-group-page">
              Add new group
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
