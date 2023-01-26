import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <span className="book-display">
      <h1>
        {title}
      </h1>
      <h2> by </h2>
      <h1>
        {author}
      </h1>
      <button type="button" onClick={handleRemove}>Remove</button>
    </span>
  );
}

export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
