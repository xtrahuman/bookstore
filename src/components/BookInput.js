import React from 'react';

const BookInput = () => (
  <div>
    <h2>Add new book</h2>
    <form id="book-Form">
      <input
        type="text"
        className="input-Book"
        placeholder="add your book"
      />
      <input
        type="text"
        className="input-author"
        placeholder="author"
      />
      <select id="selectbooks" name="select" form="book-form">
        <option value="action">action</option>
        <option value="economy">economy</option>
        <option value="science fiction">science fiction</option>
      </select>
      <button type="button" className="form-Button">submit book</button>
    </form>
  </div>
);

export default BookInput;
