import React, { useRef, useState } from "react";
import NavItem from "./NavItem";

const Header = ({ refClass, executeScroll }) => {
  const [showMenu, setShowMenu] = useState(false);

  const refClickEvent = (refItem) =>
    refItem.current == null ? undefined : executeScroll(refItem);

  return (
    <header>
      <nav className="nav bd-container">
        <a className="nav-logo">Batuhan</a>
        <div className={showMenu === false ? "nav-menu" : "nav-menu show-menu"}>
          <ul className="nav-list">
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.profileRef)}
                href="#home"
                className="nav-link "
              >
                <i className="bx bx-home nav-icon"></i>Home
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.aboutRef)}
                href="#about"
                className="nav-link"
              >
                <i className="bx bx-user nav-icon"></i>about
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.contactRef)}
                href="#experience"
                className="nav-link"
              >
                <i className="bx bx-envelope nav-icon"></i>Contact
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.educationRef)}
                href="#education"
                className="nav-link"
              >
                <i className="bx bx-book nav-icon"></i>Education
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.skillsRef)}
                href="#skills"
                className="nav-link"
              >
                <i className="bx bx-receipt nav-icon"></i>Skills
              </a>
            </NavItem>
            <NavItem setShowMenu={setShowMenu}>
              <a
                onClick={() => refClickEvent(refClass.experienceRef)}
                href="#experience"
                className="nav-link"
              >
                <i className="bx bx-briefcase-alt nav-icon"></i>Experience
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
