import React, { useContext, useReducer } from "react";
import { useCallback } from "react";
import { initial_state, reducer } from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const fetch_cocktails = useCallback((url) => {
    dispatch({ type: "start_loading" });
    fetch(url)
      .then((yes) => yes.json())
      .then((response) =>
        setTimeout(() => {
          console.log("finish fetching");
          dispatch({ type: "update_cocktails", payload: { response } });
        }, 0)
      )
      .catch((err) => {
        console.log(err);
        console.log("got eror");
      });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, fetch_cocktails, url }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
