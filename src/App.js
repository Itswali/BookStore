/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Routes } from 'react-router-dom';
import './styles/style.scss';
import Books from './combiner/Books';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="Title-name">
          BOOK STORE
        </div>
        <div className="nav-links">
          <Link to="/"> Books </Link>
          <Link to="/"> Category </Link>
        </div>
      </nav>
      <Books />
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </>
  );
}
