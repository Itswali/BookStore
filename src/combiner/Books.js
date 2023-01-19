import React from 'react';
import BookList from '../components/BookItem';
import CreateBook from '../components/CreateBook';

export default function Books() {
  return (
    <div>
      <BookList />
      <CreateBook />
    </div>
  );
}
