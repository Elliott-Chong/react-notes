import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const {
    state: { currentPage, totalPages },
    dispatch,
  } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        onClick={() => {
          if (currentPage === 1) {
            dispatch({ type: "SET_PAGE", payload: 49 });
          } else {
            dispatch({ type: "SET_PAGE", payload: currentPage - 1 });
          }
        }}
      >
        Prev
      </button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => {
          if (currentPage === 49) {
            dispatch({ type: "SET_PAGE", payload: 1 });
          } else {
            dispatch({ type: "SET_PAGE", payload: currentPage + 1 });
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
