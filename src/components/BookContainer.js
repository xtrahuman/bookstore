import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookInput from './BookInput';
import BookList from './BookList';
import Categories from './Categories';
import Navbar from './Navbar';

const bookContainer = () => (
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
            <BookList />
            <BookInput />
          </div>
)}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default bookContainer;
