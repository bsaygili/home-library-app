import React from "react";
import { useContextApi } from "../context/ContextApi";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContextApi();
  console.log(favorites);
  const favoritesCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="booklist">
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <div className="per-book" key={favorite.id}>
            <div>
              <h2>{favorite.title} </h2>
            </div>
            <div>
              <img src={favorite.image_url} alt={favorite.title} />
            </div>
            <div>
              {favoritesCheck(favorite.id) ? (
                <button onClick={() => removeFromFavorites(favorite.id)}>
                  Remove From Favorites List
                </button>
              ) : (
                <button onClick={() => addToFavorites(favorite)}>
                  Add to Favorites List
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <p>You don't have favorite books yet</p>
          <img src="./images/sad-astronaut" alt="sadness" />
        </>
      )}
    </div>
  );
};

export default Favorites;
