/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <span>
      {title}
      by
      {author}
      <button type="button">Remove</button>
    </span>
  );
}

export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
