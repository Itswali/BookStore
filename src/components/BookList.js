import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import CreateBook from './CreateBook';

function BookList() {
  const books = useSelector((state) => state.books);

  return (
    <ul className="book-container">
      {books.map((book) => (
        <>
          <li className="Main-content" key={book.id}>
            <Book title={book.title} author={book.author} id={book.id} />
          </li>
        </>
      ))}

      <CreateBook />
    </ul>
  );
}

export default BookList;
