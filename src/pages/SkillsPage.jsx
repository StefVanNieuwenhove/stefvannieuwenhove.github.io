import React from 'react';
import { skills } from '../data/content';
import { AiFillCheckCircle } from 'react-icons/ai';

const SkillsPages = () => {
  const { frontend, backend, databases, tech } = skills;
  return (
    <article
      id='skills'
      className='w-full h-screen bg-beige dark:bg-dark-main overflow-scroll'
    >
      <h1 className='w-full text-center text-4xl font-bold text-dark-kaki dark:text-dark-contrastText'>
        Skills
      </h1>
      <div className='w-full mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center place-content-center'>
        <div className='w-2/3 lg:w-2/3 h-full border-2 border-dark-kaki dark:border-dark-contrastText rounded-md shadow-none hover:shadow-2xl'>
          <h2 className='w-full text-center text-xl text-dark-kaki dark:text-dark-contrastText border-b'>
            Front-end
          </h2>
          <ul className=''>
            {frontend.map((item) => (
              <li
                key={item}
                className='px-2 text-center text-lg text-dark-kaki dark:text-dark-contrastText flex gap-2 items-center'
              >
                <AiFillCheckCircle />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-2/3 lg:w-2/3 h-full border-2 border-dark-kaki dark:border-dark-contrastText rounded-md shadow-none hover:shadow-2xl'>
          <h2 className='w-full text-center text-xl text-dark-kaki dark:text-dark-contrastText border-b'>
            Back-end
          </h2>
          <ul className=''>
            {backend.map((item) => (
              <li
                key={item}
                className='px-2 text-center text-lg text-dark-kaki dark:text-dark-contrastText flex gap-2 items-center'
              >
                <AiFillCheckCircle />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-2/3 lg:w-2/3 h-full border-2 border-dark-kaki dark:border-dark-contrastText rounded-md shadow-none hover:shadow-2xl'>
          <h2 className='w-full text-center text-xl text-dark-kaki dark:text-dark-contrastText border-b'>
            Database
          </h2>
          <ul className=''>
            {databases.map((item) => (
              <li
                key={item}
                className='px-2 text-center text-lg text-dark-kaki dark:text-dark-contrastText flex gap-2 items-center'
              >
                <AiFillCheckCircle />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-2/3 lg:w-2/3 border-2 h-full border-dark-kaki dark:border-dark-contrastText rounded-md shadow-none hover:shadow-2xl'>
          <h2 className='w-full text-center text-xl text-dark-kaki dark:text-dark-contrastText border-b'>
            Tech
          </h2>
          <ul className=''>
            {tech.map((item) => (
              <li
                key={item}
                className='px-2 text-center text-lg text-dark-kaki dark:text-dark-contrastText flex gap-2 items-center'
              >
                <AiFillCheckCircle />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SkillsPages;
