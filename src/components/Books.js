import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  Books.propTypes = {
    name: PropTypes.string.isRequired,
    bookType: PropTypes.string.isRequired,
    writer: PropTypes.string.isRequired,
  };
  const { name, bookType, writer } = props;
  return (
    <li>
      <div>
        <p>{bookType}</p>
        <p>{name}</p>
        <p>{writer}</p>
      </div>
      <button type="button">remove</button>
    </li>
  );
};

export default Books;
