import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, editItem, deleteItem }) => {
  return (
    <div className="grocery-list">
      {list.map((item, index) => {
        return (
          <article className="grocery-item" key={index}>
            <p className="title">{item}</p>
            <div className="btn-container">
              <button
                className="edit-btn"
                type="button"
                onClick={() => {
                  editItem(index);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => {
                  deleteItem(index);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
