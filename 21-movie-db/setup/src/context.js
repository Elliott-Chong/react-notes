import React, { useContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchMovies = async () => {
      dispatch({ type: "START_LOADING" });
      const yes = await fetch(API_ENDPOINT + `&s=${state.search}`);
      const response = await yes.json();
      dispatch({ type: "UPDATE_MOVIES", payload: response });
    };
    fetchMovies();
  }, [state.search]);
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
