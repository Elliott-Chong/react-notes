import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import { reducer, initialState } from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "START_LOADING" });
    const fetchStories = async () => {
      const yes = await fetch(
        API_ENDPOINT + `query=${state.search}` + `&page=${state.currentPage}`
      );
      const response = await yes.json();
      console.log(response);
      dispatch({ type: "UPDATE_STORIES", payload: response });
    };
    fetchStories();
  }, [state.search, state.currentPage]);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
