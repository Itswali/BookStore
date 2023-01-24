const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((b) => b !== action.book) };
    default:
      return state;
  }
}
