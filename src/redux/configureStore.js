/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import book from './books/books';
import Cartegory from '../components/Category';

const rootReducer = configureStore({
  book,
  Cartegory,
});

export default rootReducer;
