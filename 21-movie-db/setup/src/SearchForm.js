import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <form className="search-form">
      <h2>Search Movies</h2>
      <input
        type="text"
        value={state.search}
        className="form-input"
        onChange={(e) => {
          dispatch({ type: "SEARCH", payload: e.target.value });
        }}
      />
      <div className="error">{state.error}</div>
    </form>
  );
};

export default SearchForm;
