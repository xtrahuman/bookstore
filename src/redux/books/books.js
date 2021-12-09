import { addMoreBook, fetchBooks, deleteBook } from '../../components/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  await addMoreBook(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  await deleteBook(book);
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

export const fetchBook = () => async (dispatch) => {
  const book = await fetchBooks();
  const bookList = Object.entries(book).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      item_id: key,
      ...bookEntries,
    };
  });
  dispatch({
    type: FETCH_BOOKS,
    payload: bookList,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);
    case FETCH_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
