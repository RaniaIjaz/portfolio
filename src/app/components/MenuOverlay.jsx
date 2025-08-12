import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="md:hidden bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm w-full">
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default MenuOverlay;
