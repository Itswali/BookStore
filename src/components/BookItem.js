import Book from './Book';
import '../styles/style.scss';
import CreateBook from './CreateBook';

function BookList() {
  const books = [
    {
      id: 1,
      title: 'Harry Potter ',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      author: ' James MCcaler',
      progress: 77,
      chapter: 'Chapter 6: Half Blood Prince',
    },
    {
      id: 2,
      title: 'Sacred Games',
      genres: ['Sci-Fi', 'Fantasy'],
      author: 'Frank Herbert',
      progress: 8,
      chapter: 'Chapter 1: "The Immortal"',
    },
    {
      id: 3,
      title: 'MindStorm',
      genres: ['Economics', 'Non-Fiction'],
      author: 'Philis Coloumbia',
      progress: 0,
      chapter: 'Introduction',
    },
  ];
  return (
    <ul className="book-container">
      {books.map((book) => (
        <li className="Main-content" key={book.id}>
          <Book title={book.title} author={book.author} />
          <CreateBook />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
