import React from 'react';
import { ThemeToggle } from '../components';

const HomePage = () => {
  return (
    <>
      <article
        id='home'
        className='w-full h-screen bg-beige dark:text-white dark:bg-dark-blue'
      >
        <ThemeToggle />
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='text-5xl font-bold text-dark-kaki'>
            Stef Van Nieuwenhove
          </h1>
          <h2 className='text-3xl font-semibold text-dark-kaki'>
            Frontend Developer
          </h2>
        </div>
      </article>
    </>
  );
};

export default HomePage;
