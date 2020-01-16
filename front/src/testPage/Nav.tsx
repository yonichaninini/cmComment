import React from 'react';
import { Link } from 'react-router-dom';
import './testPage.css';

const Nav = () => {
  return (
    <div className="menu">
      <Link to="/1">PAGE1</Link>
      <Link to="/2">PAGE2</Link>
    </div>
  );
};

export default Nav;
