/* eslint-disable import/no-extraneous-dependencies */
import { Link, Route, Routes } from 'react-router-dom';
import './styles/style.scss';

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="Title-name">
          BOOK STORE
        </div>
        <div className="nav-links">
          <Link to="/"> Home </Link>
          <Link to="/"> Book </Link>
          <Link to="/"> Label </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </>
  );
}
