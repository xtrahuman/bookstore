import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  Books.propTypes = {
    name: PropTypes.string.isRequired,
    bookType: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired,
    book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  };

  const {
    book, name, bookType, removeBook,
  } = props;

  return (
    <li>
      <div>
        <p>{bookType}</p>
        <p>{name}</p>
      </div>
      <button type="button" onClick={() => removeBook(book)}>remove</button>
    </li>
  );
};

export default Books;
