import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 shadow-blue-500 bg-amber-600 text-white">
      <div className="mx-8 flex items-center h-full">
        <ul className="flex gap-5 text-xl">
          <li className="cursor-pointer">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to={"/cart"}>
              Cart
              <span className="border-2 rounded-full ml-1 px-[6px] text-white text-base text-center">
                0
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
