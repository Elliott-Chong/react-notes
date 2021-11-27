import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { state, dispatch, fetch_cocktails, url } = useGlobalContext();
  return (
    <form className="search-form">
      <div className="form-control">
        <label htmlFor="name">Search Your Favourite Cocktail!</label>
        <input
          type="text"
          id="name"
          autoFocus
          value={state.form}
          onChange={(e) => {
            dispatch({ type: "form", payload: e.target.value });
            fetch_cocktails(`${url}${e.target.value}`);
          }}
        />
      </div>
    </form>
  );
};

export default SearchForm;
