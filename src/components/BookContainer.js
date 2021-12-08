import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { addBook, removeBook } from '../redux/books/books';
import BookInput from './BookInput';
import BookList from './BookList';
import Categories from './Categories';
import Navbar from './Navbar';

const bookContainer = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  localStorage.setItem('allBooks', JSON.stringify(books));
  const moreBook = (title, author, bookType) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      bookType,
    };

    dispatch(addBook(newBook));
    localStorage.setItem('allBooks', JSON.stringify(books));
  };
  const deleteBook = (book) => {
    dispatch(removeBook(book));

    localStorage.setItem('allBooks', JSON.stringify(books));
  };

  return (
    <div>
      <div className="header-nav">
        <h1>Bookstore cms</h1>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <div>
              <BookList allbooks={books} removeBook={deleteBook} />
              <BookInput moreBook={moreBook} />
            </div>
)}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default bookContainer;
