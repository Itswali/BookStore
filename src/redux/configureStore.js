import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from '../components/Category';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoriesReducer,
});

const store = configureStore({
  rootReducer,
});

export default store;
