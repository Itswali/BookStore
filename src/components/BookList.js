import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import CreateBook from './CreateBook';
import { getAllBooks } from '../redux/fetchApi';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="book-container">
      <ul className="books">
        {books && books.length > 0 ? books.map((book) => (
          <Book
            key={book.Id}
            Id={book.Id}
            Title={book.title}
            Author={book.author}
            Category={book.category}
          />
        )) : <p>No books available</p>}
      </ul>
      <div className="horizontal-divider"> </div>
      <CreateBook />
    </div>
  );
}

export default BookList;
