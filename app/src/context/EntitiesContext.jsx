import React, { createContext } from "react";
import { useState } from "react";
export const EntitiesContext = createContext();

const EntitiesProvider = ({ children }) => {

  const [fav, setFav] = useState([]);
  
  const handleChangeFav = (comment) => {
    setFav(
      [...fav,
      comment]
    );
  };
  
  return (
    <EntitiesContext.Provider
      value={{
        fav,
        handleChangeFav,
      }}
    >
      {children}
    </EntitiesContext.Provider>
  );
};
export default EntitiesProvider;
