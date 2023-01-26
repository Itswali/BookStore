import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAPI } from '../redux/fetchApi';

const Book = (props) => {
  const {
    Title, Author, Id,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(Id));
  };

  return (
    <span className="book-display">
      <h1>
        {Title}
      </h1>
      <h2> by </h2>
      <h1>
        {Author}
      </h1>
      <button type="button" onClick={handleRemove}>Remove</button>
    </span>
  );
};

export default Book;

Book.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};
