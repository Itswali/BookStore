/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Routes } from 'react-router-dom';
import './styles/style.scss';
import Books from './combiner/Books';
import Cartegory from './components/Category';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="Title-name">
          BOOK STORE
        </div>
        <div className="nav-links">
          <Link to="/Books"> Books </Link>
          <Link to="/Category"> Category </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/Category" element={<Cartegory />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/" />
      </Routes>
    </>
  );
}
