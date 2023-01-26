/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <span className="title" htmlFor="title">Title:</span>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <span htmlFor="author">Author:</span>
      <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default CreateBook;
