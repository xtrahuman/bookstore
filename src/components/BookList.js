import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BookList = (props) => {
  BookList.propTypes = {
    allbooks: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired,
  };
  const { allbooks, removeBook } = props;
  return (
    <ul>
      {allbooks.map((book) => (
        <Books
          key={book.id}
          name={book.title}
          bookType={book.bookType}
          writer={book.author}
          removeBook={removeBook}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BookList;
