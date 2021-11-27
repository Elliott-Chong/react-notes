import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <form className="search-form">
      <h2>Search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={state.search}
        onChange={(e) => {
          dispatch({ type: "SEARCH", payload: e.target.value });
        }}
      />
    </form>
  );
};

export default SearchForm;
