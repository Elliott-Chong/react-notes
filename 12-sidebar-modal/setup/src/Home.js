import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { dispatch } = useGlobalContext();
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          dispatch({ type: "OPEN_SIDEBAR" });
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "OPEN_MODAL" });
        }}
      >
        Show Modal
      </button>
    </main>
  );
};

export default Home;
