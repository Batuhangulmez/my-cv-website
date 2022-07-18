import React from "react";

const NavItem = ({ setShowMenu, children }) => {
  return (
    <li onClick={() => setShowMenu(false)} className="nav-item">
      {children}
    </li>
  );
};

export default NavItem;
