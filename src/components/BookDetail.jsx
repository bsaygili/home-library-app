import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// api
import { BOOK_DETAILS_URL } from "../apis/api";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="book-details">
      <div className="book-image">
        <img src={book.image_url} alt={book.title} />
      </div>
      <div className="book-data">
        <h2>{book.title}</h2>
        <h3>{book.authors}</h3>
        <h4>{book.genres}</h4>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
