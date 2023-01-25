import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setId(id + 1);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor="author">
        Author
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default CreateBook;
