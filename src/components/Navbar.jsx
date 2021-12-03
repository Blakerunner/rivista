import { HiOutlineBookOpen } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
                className='flex items-center py-5 px-2 text-gray-700 hover:text-gray-900'>
                <HiOutlineBookOpen />
                <span className='font-bold'>Rivista</span>
              </NavLink>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              <NavLink
                to='/'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Features
              </NavLink>
              <NavLink
                to='/'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Pricing
              </NavLink>
            </div>

            <div className='hidden md:flex items-center space-x-1'>
              <NavLink to='/' className='py-5 px-3'>
                Login
              </NavLink>
              <NavLink
                to='/'
                className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'>
                Signup
              </NavLink>
            </div>

            <div className='md:hidden flex items-center'>
              <button className='mobile-menu-button'></button>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile-menu hidden md:hidden'>
        <NavLink to='/' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Features
        </NavLink>
        <NavLink to='/' className='block py-2 px-4 text-sm hover:bg-gray-200'>
          Pricing
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
