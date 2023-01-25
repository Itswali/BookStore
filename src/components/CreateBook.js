/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="author">Author:</label>
      <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default CreateBook;
