import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Harry Potter',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    author: 'Suzanne Collins',
    progress: 77,
    chapter: 'Chapter 6: Half Blood Prince',
  },
  {
    id: 2,
    title: 'Sacred Games',
    genres: ['Sci-Fi', 'Fantasy'],
    author: 'Frank Herbert',
    progress: 8,
    chapter: 'Chapter 1: "The Immortal"',
  },
  {
    id: 3,
    title: 'MindStorm',
    genres: ['Economics', 'Non-Fiction'],
    author: 'Philis Coloumbia',
    progress: 0,
    chapter: 'Introduction',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
