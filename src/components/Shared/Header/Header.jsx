import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar navbar-glass mx-auto container'>
      <div className='navbar-start'>
        <Link to='/' className='navbar-item sm:block hidden'>Classy-Chefs</Link>
      </div>
      <div className='navbar-end'>
        <Link to='/' className='navbar-item'>Home</Link>
        <Link to='/login' className='navbar-item'>Login</Link>
        <Link to='/' className='navbar-item'>About</Link>
      </div>
    </div>
  );
};

export default Header;
