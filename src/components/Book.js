import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/fetchApi';

const Book = (props) => {
  const {
    title, author, Id,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(Id));
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
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};
