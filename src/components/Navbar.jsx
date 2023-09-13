import React from 'react';
import { useTheme } from '../context/ThemeProvider';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const pages = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <header className='w-full h-16 px-2 sticky z-20 top-0 left-0 border-b bg-light-blue text-dark-blue dark:text-white dark:bg-dark-ocean '>
        <nav className='flex justify-between px-4 items-center h-full'>
          <div>
            <h1 className='text-lg'>
              <a href='#home'>Stef Van Nieuwenhove</a>
            </h1>
          </div>
          <div className='flex justify-around flex-auto'>
            {pages.map((page) => (
              <a
                key={page.name}
                href={`#${page.name.toLowerCase()}`}
                className='hover:underline text-lg focus:underline'
              >
                {page.name}
              </a>
            ))}
          </div>
          <div>
            {theme === 'light' ? (
              <div>
                <BsMoonFill className='text-2xl' onClick={toggleTheme} />
              </div>
            ) : (
              <div>
                <BsSunFill
                  className='text-2xl text-sun-yellow'
                  onClick={toggleTheme}
                />
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* <Outlet />  */}
    </>
  );
};

export default Navbar;
