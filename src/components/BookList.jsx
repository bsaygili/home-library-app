import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// API
import { API_URL } from "../apis/api";
// context
import { useContextApi } from "../context/ContextApi";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useContextApi();
  const navigate = useNavigate();

  const favoritesCheck = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="booklist">
      {books.map((book) => (
        <div key={book.id} className="per-book">
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img
              src={book.image_url}
              alt={book.title}
              onClick={() => navigate(`/books/${book.id}`)}
            />
          </div>
          <div>
            {favoritesCheck(book.id) ? (
              <button onClick={() => removeFromFavorites(book.id)}>
                Remove From Favorites List
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to Favorites List
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
