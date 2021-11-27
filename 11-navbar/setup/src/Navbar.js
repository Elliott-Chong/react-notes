import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import Socials from "./socials";
import Links from "./links.js";

const Navbar = () => {
  console.log(console);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>

        <div className="links-container show-container">
          <Links links={links} />
        </div>

        <div className="social-icons">
          <Socials socials={social} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
