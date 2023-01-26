import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../redux/fetchApi';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title,
      author,
      category,
    };
    dispatch(addBookAPI(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form className="add-book" onSubmit={handleSubmit}>
      <span className="title" htmlFor="title">Title:</span>
      <input type="text" id="title" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <span htmlFor="author">Author:</span>
      <input type="text" id="author" required value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default CreateBook;
