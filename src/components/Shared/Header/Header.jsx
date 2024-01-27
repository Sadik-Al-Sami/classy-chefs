import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from '../ThemeButton/ThemeButton';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('Successfully Logged Out');
      })
      .catch((error) => {
        console.log('An error occured');
      });
  };
  return (
    <div className='navbar navbar-glass border-b-[1px] border-gray-500 font-poppins'>
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
        {user && (
          <div className='avatar avatar-ring avatar-md'>
            <div className='dropdown-container'>
              <div className='dropdown'>
                <label
                  className='btn btn-ghost flex cursor-pointer px-0'
                  tabIndex='0'>
                  <img
                    src={user.photoURL}
                    className='h-4 w-4'
                    alt='avatar'
                  />
                </label>
                <div className='dropdown-menu dropdown-menu-bottom-left'>
                  <p className='dropdown-item text-sm'>{user.displayName}</p>
                  <Link
                    to='/edit'
                    tabIndex='-1'
                    className='dropdown-item text-sm'>
                    Account Settings
                  </Link>
                  <button
                    onClick={handleLogOut}
                    tabIndex='-1'
                    className='dropdown-item text-sm'>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
