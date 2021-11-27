import React, { useState, useContext, useReducer } from "react";
import sublinks from "./data";

const AppContext = React.createContext();
const initial_state = {
  isSidebarOpen: false,
  isSidemenuOpen: false,
  sidebarLocation: {},
  sidebarText: "",
  links: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };
    case "OPEN_SIDEMENU":
      return { ...state, isSidemenuOpen: true };
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };
    case "CLOSE_SIDEMENU":
      return { ...state, isSidemenuOpen: false };
    case "UPDATE_LOCATION":
      const center = action.payload.center;
      const bottom = action.payload.bottom;
      const text = action.payload.text;
      const yes = sublinks.find((link) => {
        return link.page === text.toLowerCase();
      });
      const newlinks = yes.links;
      return {
        ...state,
        isSidemenuOpen: true,
        sidebarText: text,
        sidebarLocation: { center, bottom },
        links: newlinks,
      };
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
