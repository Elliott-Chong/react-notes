import React, { useState, useContext, useReducer } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initial_state = {
    isModalOpen: false,
    isSidebarOpen: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return { ...state, isModalOpen: true };
      case "CLOSE_MODAL":
        return { ...state, isModalOpen: false };
      case "OPEN_SIDEBAR":
        return { ...state, isSidebarOpen: true };
      case "CLOSE_SIDEBAR":
        return { ...state, isSidebarOpen: false };
    }
  };

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

export { AppProvider, useGlobalContext };
