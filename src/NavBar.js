import React from "react";
import Header from './components/layout/Header/Header';
import { useSelector } from 'react-redux';
import UserOptions from "./components/layout/Header/UserOptions";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.user);
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            {user && isAuthenticated ? <UserOptions user={user} /> : <button className="btn btn-primary" href="">Login</button>}
            <Header />
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Contact US <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Find A Store <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              MEN
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Shirts
              </a>
              <a className="dropdown-item" href="#">
                T-Shirts
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Trousers
              </a>
              <a className="dropdown-item" href="#">
                Shorts
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              WOMEN
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Pants
              </a>
              <a className="dropdown-item" href="#">
                Dresses
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Sports Wear
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              KIDS
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Infants
              </a>
              <a className="dropdown-item" href="#">
                Girls
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Boys
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
