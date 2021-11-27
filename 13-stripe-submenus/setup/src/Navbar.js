import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import useGlobalContext from "./context";

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const changeLocation = (e) => {
    const yes = e.target.getBoundingClientRect();
    console.log(yes.top);
    const center = (yes.left + yes.right) / 2;
    const bottom = yes.bottom;
    dispatch({
      type: "UPDATE_LOCATION",
      payload: { text: e.target.innerText, center: center, bottom: bottom },
    });
  };
  return (
    <nav
      className="nav"
      onMouseOver={(e) => {
        // console.log(e.target);
        if (e.target.className !== "link-btn") {
          dispatch({ type: "CLOSE_SIDEMENU" });
        }
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button
            className="btn toggle-btn"
            onClick={() => {
              dispatch({ type: "OPEN_SIDEBAR" });
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={changeLocation}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={changeLocation}>
              Developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={changeLocation}>
              Company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
