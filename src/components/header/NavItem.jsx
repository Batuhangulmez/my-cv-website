import React from "react";

const NavItem = ({ onClick, setShowMenu, children }) => {
  return (
    <li onClick={(() => setShowMenu(false), onClick)} className="nav-item">
      {children}
    </li>
  );
};

export default NavItem;
