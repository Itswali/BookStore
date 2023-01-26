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
      <ul>
        {books && books.length > 0 ? books.map((book) => (
          <Book
            Id={book.Id}
            key={book.Id}
            Title={book.title}
            Author={book.author}
          />
        )) : <p>No books available</p>}
      </ul>
      <CreateBook />
    </div>
  );
}

export default BookList;
