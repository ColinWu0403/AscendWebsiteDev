import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, react } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-[#e48c17] pl-5 pr-5`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ascend&nbsp;
            <span className="xs:block hidden font-bold">Purdue</span>
          </p>
        </Link>

        {/* Right Hand Navbar */}
        <ul className="list-none hidden sm:flex flex-row gap-7">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primary" : "text-secondary"
              } text-lg cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a
                className="text-white font-medium transition duration-300 hover:text-brownish"
                href={`${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar Drop down menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain curspor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#e48c17] absolute top-20
            right-0 mx-4 my-2 min-w-[140px] z-10 rounded-sm`}
          >
            <ul className="list-none flex justify-end item-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-primary" : "text-secondary"
                  } text-lg cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a
                    className="text-base text-white font-medium transition duration-300 hover:text-brownish"
                    href={`${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
