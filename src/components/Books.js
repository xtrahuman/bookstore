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
      <div className="book-detail">
        <div className="book-type-name">
          <p className="book-type">{bookType}</p>
          <p className="book-name">{name}</p>
        </div>
        <div className="interactive-btn">
          <button type="button" className="int-button">Comment</button>
          <button type="button" className="int-button" onClick={() => removeBook(book)}>Remove</button>
          <button type="button" className="int-button">Edit</button>
        </div>
      </div>
      <div className="chapter-completion">
        <div className="completion-data">
          <div className="completion-rate" />
          <div>
            <p className="percent-complete">65%</p>
            <p className="p-completed">completed</p>
          </div>
        </div>
        <div className="current-chapter">
          <p className="chapter-head">current chapter</p>
          <p className="chapter-x">chapter xx</p>
          <button type="button" className="update-progress">update progress</button>
        </div>
      </div>
    </li>
  );
};

export default Books;
