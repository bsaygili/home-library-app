import React from "react";
import { useContextApi } from "../context/ContextApi";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useContextApi();

  const nonImage = "../images/sadness.jpg";
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
        <div className="non-favorites">
          <p>You don't have favorite books yet</p>
          <div>
            <img src="../images/sadness.jpg" alt="nonFavorites" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
