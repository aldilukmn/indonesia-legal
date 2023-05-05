import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

function Navigation() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img width="195px" src="https://storage.googleapis.com/petromindogambar/indonesialegal-logo.svg" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <Link to="/" className={`nav-link ${activeLink === "/" ? "active" : ""}`} onClick={() => handleNavLinkClick("/")}>
                <FaHome/> HOME
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ABOUT
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/aboutus" className={`dropdown-item border-bottom ${activeLink === "/aboutus" ? "active" : ""}`} onClick={() => handleNavLinkClick("/aboutus")}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/supervisoryboard" className={`dropdown-item ${activeLink === "/supervisoryboard" ? "active" : ""}`} onClick={() => handleNavLinkClick("/supervisoryboard")}>
                    SUPERVISORY BOARD
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/news" className={`nav-link ${activeLink === "/news" ? "active" : ""}`} onClick={() => handleNavLinkClick("/news")}>
                NEWS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event" className={`nav-link ${activeLink === "/event" ? "active" : ""}`} onClick={() => handleNavLinkClick("/event")}>
                EVENT
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                e-LIBRARY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DIRECTORY OF LEGAL FIRM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ARBITRATION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                APHMET
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <p className="nav-link border-right">|</p>
            </li>
            <li className="nav-item">
              <a className="nav-link border-right" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaUser /> LOGIN
              </a>
            </li>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Modal title
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">...</div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
