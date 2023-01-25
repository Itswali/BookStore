/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <span>
      {title}
      by
      {author}
      <button type="button" onClick={handleRemove}>Remove</button>
    </span>
  );
}

export default Book;
