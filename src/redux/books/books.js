const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const getLocalStorage = () => (localStorage.getItem('allBooks') ? JSON.parse(localStorage.getItem('allBooks')) : []);

const initialState = getLocalStorage();

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return [...state, action.payload];

    case REMOVE_BOOK:

      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
