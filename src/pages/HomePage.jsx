import React from 'react';
import { ThemeToggle } from '../components';
import Typed from 'react-typed';
import { info } from '../data/content';

const HomePage = () => {
  const { user, typed } = info;
  return (
    <>
      <article
        id='home'
        className='w-full h-screen bg-beige  dark:bg-dark-main'
      >
        <ThemeToggle />
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='text-5xl font-bold text-dark-kaki dark:text-dark-contrastText'>
            {user.name}
          </h1>
          <h2 className='text-3xl font-semibold text-dark-kaki dark:text-dark-contrastText'>
            <Typed strings={typed} typeSpeed={30} backSpeed={40} loop />
          </h2>
        </div>
      </article>
    </>
  );
};

export default HomePage;
