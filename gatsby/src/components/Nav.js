import React from 'react';
import { Link, navigate } from 'gatsby';

const gotoSlicemasters = () => {
  setTimeout(() => {
    navigate('/slicemasters');
  }, 2000);
};

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/pizzas">Pizza Menu</Link>
      </li>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/slicemasters">SliceMasters</Link>
      </li>
      <Link to="/order">Order Ahead!</Link>
    </ul>
  </nav>
);

export default Nav;
