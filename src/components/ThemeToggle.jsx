import React from 'react';
import { useTheme } from '../context/ThemeProvider';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className='transparent right-0 w-full flex justify-end p-2'>
      {theme === 'light' ? (
        <div>
          <BsMoonFill
            className='text-3xl text-dark-gray'
            onClick={toggleTheme}
          />
        </div>
      ) : (
        <div>
          <BsSunFill className='text-3xl text-sun' onClick={toggleTheme} />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
