import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.scss';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li>
          {' '}
          <Link to="/">Books</Link>
          {' '}
        </li>
        <li>
          {' '}
          <Link to="/Category">Cartegory</Link>
          {' '}
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
