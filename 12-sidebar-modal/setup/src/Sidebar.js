import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { dispatch, state } = useGlobalContext();
  return (
    <aside className={`sidebar ${state.isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button
          className="close-btn"
          onClick={() => {
            dispatch({ type: "CLOSE_SIDEBAR" });
          }}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((socials) => {
          return (
            <li key={socials.id}>
              <a href={socials.url}>{socials.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
