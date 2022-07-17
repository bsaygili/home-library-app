// React Packages
import React from "react";
import { Routes, Route } from "react-router-dom";
// CSS File
import "../styles/main.css";
// Components
import Navbar from "./Navbar";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import Favorites from "./Favorites";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route exact path="/books/:id" element={<BookDetail />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
