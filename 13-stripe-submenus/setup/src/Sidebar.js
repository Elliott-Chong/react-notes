import React from "react";
import { FaTimes } from "react-icons/fa";
import useGlobalContext from "./context";
import sublinks from "./data";
const things = ["Products", "Developers", "Company"];
const Sidebar = () => {
  const one = sublinks[0];
  const two = sublinks[1];
  const three = sublinks[2];
  const { state, dispatch } = useGlobalContext();
  return (
    <div className={`sidebar-wrapper ${state.isSidebarOpen && "show"}`}>
      <aside className="sidebar">
        <button
          className="close-btn"
          onClick={() => {
            dispatch({ type: "CLOSE_SIDEBAR" });
          }}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {things.map((thing) => {
            return (
              <>
                <h4>{thing}</h4>
                <div className="sidebar-sublinks">
                  {sublinks[0].links.map((thing) => {
                    return (
                      <a href={thing.url}>
                        {thing.icon}
                        {thing.label}
                      </a>
                    );
                  })}
                  {sublinks[1].links.map((thing) => {
                    return (
                      <a href={thing.url}>
                        {thing.icon}
                        {thing.label}
                      </a>
                    );
                  })}
                  {sublinks[2].links.map((thing) => {
                    return (
                      <a href={thing.url}>
                        {thing.icon}
                        {thing.label}
                      </a>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
