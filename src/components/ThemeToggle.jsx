import React from 'react';
import { useTheme } from '../context/ThemeProvider';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className='transparent right-0 w-full flex justify-end p-2'>
      {theme === 'light' ? (
        <div className='border-2 border-moon rounded-md p-2 '>
          <BsMoonFill className='text-3xl text-moon' onClick={toggleTheme} />
        </div>
      ) : (
        <div className='border-2 border-sun rounded-md p-2'>
          <BsSunFill className='text-3xl text-sun' onClick={toggleTheme} />
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
