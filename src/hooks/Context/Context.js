import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [reacts, setReacts] = useState([]);

  const setReactsValue = (react) => {
    setReacts((prev) => {
      const newReacts = prev.filter((r) => r !== react);
      return [...newReacts, react];
    });
  };

  const getReactsValue = () => {
    return reacts;
  };

  const resetReactsValue = () => {
    setReacts([]);
  };

  const contextValue = {
    reacts,
    setReactsValue,
    getReactsValue,
    resetReactsValue,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
