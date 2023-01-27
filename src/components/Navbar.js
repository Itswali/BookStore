import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import logo from '../icon.png';

const Navbar = () => (
  <div>
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link-link">
          {' '}
          <Link to="/">Books</Link>
          {' '}
        </li>
        <li className="link-linked">
          {' '}
          <Link to="/Category">Cartegory</Link>
          {' '}
        </li>
      </ul>
      <button type="button" className="icon-button">
        <img className="icon" src={logo} alt="person" />
      </button>
    </nav>
  </div>
);

export default Navbar;
