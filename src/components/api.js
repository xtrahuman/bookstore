const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vwx9jeFja9xUvulFO07F/books';

const addMoreBook = async (book) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
  });

  return result.status === 201;
};

const fetchBooks = async () => {
  const request = await fetch(url);
  const books = await request.json();
  return books;
};

const deleteBook = async (bookId) => {
  const result = await fetch(`${url}/${bookId.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId.item_id,
    }),
  });

  return result === 'The book was deleted!';
};

export { addMoreBook, fetchBooks, deleteBook };
