import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar main">
    <ul className="navbar container">
      <h2 className="navbar title">Math Magicians</h2>
      <li>
        <Link to="/">Home</Link>
      </li>
      |
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      |
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
