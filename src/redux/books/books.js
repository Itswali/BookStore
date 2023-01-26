// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// const initialState = [
//   {
//     id: uuidv4(),
//     title: 'Harry Potter',
//     genres: ['Action', 'Adventure', 'Sci-Fi'],
//     author: 'Suzanne Collins',
//   },
//   {
//     id: uuidv4(),
//     title: 'Sacred Games',
//     genres: ['Sci-Fi', 'Fantasy'],
//     author: 'Frank Herbert',
//   },
// ];

// const bookSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => [...state, action.payload],
//     removeBook: (state, action) => {
//       const index = state.findIndex((book) => book.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const { addBook, removeBook } = bookSlice.actions;

// export default bookSlice.reducer;
