import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { dispatch, state } = useGlobalContext();
  return (
    <div className={`modal-overlay ${state.isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <h3>Content Goes Here</h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            dispatch({ type: "CLOSE_MODAL" });
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
