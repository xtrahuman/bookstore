import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookInput = (props) => {
  BookInput.propTypes = {
    moreBook: PropTypes.func.isRequired,
  };

  const [bookText, setBookText] = useState({
    title: '',
    bookType: 'select category',
  });

  const onChange = (e) => {
    setBookText({
      ...bookText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { moreBook } = props;

    e.preventDefault();
    if (bookText.title.trim() && bookText.bookType !== 'select category') {
      moreBook(bookText.title, bookText.bookType);
      setBookText({
        title: '',
        bookType: bookText.bookType,
      });
    }
  };

  return (
    <div className="book-input">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-Book"
          placeholder="add your book"
          name="title"
          value={bookText.title}
          onChange={onChange}
        />
        <select id="selectbooks" name="bookType" onChange={onChange} form="book-form">
          <option value="select category">select category</option>
          <option value="action">action</option>
          <option value="economy">economy</option>
          <option value="science fiction">science fiction</option>
        </select>
        <button type="submit" className="form-button">SUBMIT BOOK</button>
      </form>
    </div>
  );
};

export default BookInput;
