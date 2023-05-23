import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="/">
              <img src={logo} alt="..." height="36" />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/tvshows" className="Link" id="link">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies" className="Link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recent" className="Link">
                  Recently Added
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mylist" className="Link">
                  My List
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
