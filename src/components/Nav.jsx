import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg text-uppercase"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <img
            alt="logo"
            src="https://www.vhv.rs/dpng/d/529-5295637_pathbrite-playstation-4-logo-png-transparent-png.png"
            width={5 + "%"}
            className="log"
            alt="ssas"
            loading="lazy"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/login">Login</Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
