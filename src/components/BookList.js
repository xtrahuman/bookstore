import React from 'react';
import Books from './Books';

const BookList = () => {
  const allBooks = [
    {
      id: 1, name: 'hunger games', type: 'action', writer: 'john james',
    },
    {
      id: 2, name: 'dune', type: 'science fiction', writer: 'john ade',
    },
    {
      id: 3, name: 'capital', type: 'economy', writer: 'john peter',
    },
  ];

  return (
    <ul>
      {allBooks.map((book) => (
        <Books
          key={book.id}
          name={book.name}
          bookType={book.type}
          writer={book.writer}
        />
      ))}
    </ul>
  );
};

export default BookList;
