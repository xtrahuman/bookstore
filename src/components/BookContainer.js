import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook, fetchBook } from '../redux/books/books';
import BookInput from './BookInput';
import BookList from './BookList';
import Categories from './Categories';
import Navbar from './Navbar';

const bookContainer = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);

  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  const moreBook = (title, category) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
  };
  const deleteBooks = (book) => {
    dispatch(removeBook(book));
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
              <BookList allbooks={books} removeBook={deleteBooks} />
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
