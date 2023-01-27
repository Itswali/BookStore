/* eslint-disable react/void-dom-elements-no-children */
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
          <Link to="/" className="link-linked">Books</Link>
          {' '}
        </li>
        <li className="link-link">
          {' '}
          <Link to="/Category" className="link-linked">Cartegory</Link>
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
