import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const BookList = (props) => {
  BookList.propTypes = {
    allbooks: PropTypes.oneOfType([PropTypes.array]).isRequired,
    removeBook: PropTypes.func.isRequired,
  };
  const { allbooks, removeBook } = props;
  return (
    <ul className="book-list">
      {allbooks.map((book) => (
        <Books
          key={book.item_id}
          name={book.title}
          bookType={book.category}
          removeBook={removeBook}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BookList;
