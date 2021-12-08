import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  Books.propTypes = {
    name: PropTypes.string.isRequired,
    bookType: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired,
    book: PropTypes.string.isRequired,
  };

  const {
    book, name, bookType, writer, removeBook,
  } = props;

  return (
    <li>
      <div>
        <p>{bookType}</p>
        <p>{name}</p>
        <p>{writer}</p>
      </div>
      <button type="button" onClick={() => removeBook(book)}>remove</button>
    </li>
  );
};

export default Books;
