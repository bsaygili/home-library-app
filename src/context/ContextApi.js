import { createContext, useContext, useState } from "react";

const ContextApi = createContext(null);
export const useContextApi = () => {
  const context = useContext(ContextApi);

  if (context === undefined) {
    throw new Error("ContextApi must be within ContextApiProvider");
  }
  return context;
};

const ContextApiProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };
  const removeFromFavorites = (id) => {
    const newFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <ContextApi.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextApiProvider;
