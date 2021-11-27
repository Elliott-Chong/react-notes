import React from "react";

const Categories = ({ categories, changeCurrent, setCurrentItems, items }) => {
  return (
    <div className="btn-container">
      <button
        className="filter-btn"
        type="button"
        onClick={() => {
          setCurrentItems(items);
        }}
      >
        All
      </button>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            type="button"
            onClick={(e) => {
              changeCurrent(e);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
