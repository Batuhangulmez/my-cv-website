import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="nav bd-container">
        <a className="nav-logo">Batuhan</a>
        <div className={showMenu == false ? "nav-menu" : "nav-menu show-menu"}>
          <ul className="nav-list">
            <NavItem setShowMenu={setShowMenu}>
              <a href="#home" className="nav-link ">
                <i className="bx bx-home nav-icon"></i>Home
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#profile" className="nav-link">
                <i className="bx bx-user nav-icon"></i>Profile
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#education" className="nav-link">
                <i className="bx bx-book nav-icon"></i>Education
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#skills" className="nav-link">
                <i className="bx bx-receipt nav-icon"></i>Skills
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#experience" className="nav-link">
                <i className="bx bx-briefcase-alt nav-icon"></i>Experience
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#certificate" className="nav-link">
                <i className="bx bx-award nav-icon"></i>Certificates
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a href="#references" className="nav-link">
                <i className="bx bx-link-external nav-icon"></i>References
              </a>
            </NavItem>
          </ul>
        </div>

        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
