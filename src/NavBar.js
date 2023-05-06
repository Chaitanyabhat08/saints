import React, { useState } from "react";
import Header from './components/layout/Header/Header';
import { useSelector } from 'react-redux';
import UserOptions from "./components/layout/Header/UserOptions";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const history = useNavigate();
  const [searchData, setSearchData] = useState(null);

  const searchProducts = (ProductData) => {
    setSearchData(ProductData);
    if (ProductData.trim()) {
      history(`/products/getallproducts/${ProductData}`)
  } else {
      history('/');
  }
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{position: "sticky"}}>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingLeft: "80px"}}>
        <ul className="navbar-nav mr-auto">
          <Header/>
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
        <div className="d-flex align-items-center" style={{paddingRight:"50px"}}>
          <form className="form-inline my-2 my-lg-0 mr-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => searchProducts(e.target.value)}
            />
          </form>
          {user && isAuthenticated ? (
  <UserOptions user={user} />
) : (
  <button className="btn btn-primary" onClick={() => history('/users/loginUser')}>
    Login
  </button>
)}

        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
     