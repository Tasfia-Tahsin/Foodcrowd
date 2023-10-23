import React from 'react';
import '../Styles/Navbar.css'
import Login from '../Pages/LoginPage';

function Navbar() {
    return (
      <div className='Navbar'>
        <ul className="navbar-list">
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/login" className="navbar-link">Login</a></li>
        <li className="navbar-item"><a href="/signin" className="navbar-link">Signin</a></li>
        </ul>
      </div>
    );
  }
export default Navbar;