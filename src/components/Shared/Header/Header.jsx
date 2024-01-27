import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';

const Header = () => {
  return (
    <div className='navbar navbar-glass border-b-[1px] border-gray-500 '>
      <div className='navbar-start'>
        <Link
          to='/'
          className='navbar-item sm:block hidden'>
          Classy-Chefs
        </Link>
      </div>
      <div className='navbar-end'>
        <Link
          to='/'
          className='navbar-item'>
          Home
        </Link>
        <Link
          to='/login'
          className='navbar-item'>
          Login
        </Link>
        <Link
          to='/'
          className='navbar-item'>
          About
        </Link>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
