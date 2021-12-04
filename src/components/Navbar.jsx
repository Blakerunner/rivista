import { useState } from 'react';
import { HiOutlineBookOpen, HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, loginHandler, logoutHandler }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const activeNavLink =
    'sm:py-2 py-4 px-4 text-green-500 border-b-4 border-green-500 font-semibold transition duration-300';
  const inactiveNavLink =
    'sm:py-2 sm:text- py-4 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300';

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-4'>
            <div>
              <NavLink
                to='/'
                className='flex items-center py-5 px-2 text-gray-800 hover:text-gray-900'>
                <HiOutlineBookOpen className='w-6 h-6 text-green-400 mr-2' />
                <span className='font-bold text-gray-600'>Rivista</span>
              </NavLink>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              <NavLink
                to='/journal'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Journal
              </NavLink>
              <NavLink
                to='/entry'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Entry
              </NavLink>
            </div>
          </div>
          <div className='hidden md:flex items-center'>
            {!user ? <button
              className='py-2 px-3 font-semibold bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded transition duration-300'
              onClick={loginHandler}>
              Login
            </button> : 
            <button
              className='py-2 px-3 font-semibold hover:bg-yellow-300 text-gray-500 hover:text-yellow-800 rounded transition duration-300'
              onClick={logoutHandler}>
              Logout
            </button>}
          </div>

          <div className='md:hidden flex items-center'>
            <button
              className='mobile-menu-button'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <HiMenu className='w-6 h-6 text-gray-700' />
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          'mobile-menu md:hidden mx-auto px-4 duration-200 transition transform ease-in-out' +
          (navbarOpen ? ' ' : '  hidden')
        }>
        {!user && <button
          className='block py-2 px-4 text-sm font-semibold bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded transition duration-300'
          onClick={loginHandler}>Login</button>}
        <NavLink
          to='/journal'
          className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Journal
        </NavLink>
        <NavLink
          to='/entry'
          className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Entry
        </NavLink>
        {user && <button
          className='block py-2 px-4 text-sm font-semibold hover:bg-yellow-300 text-grey-500 hover:text-yellow-800 rounded transition duration-300'
          onClick={logoutHandler}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
