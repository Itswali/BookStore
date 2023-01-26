import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookstoringapi from './fetchApi';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: bookstoringapi,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
