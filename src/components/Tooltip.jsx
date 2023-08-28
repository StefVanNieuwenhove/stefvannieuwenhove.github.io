import React from 'react';

const Tooltip = ({ text }) => {
  return (
    <>
      <span
        role={'tooltip'}
        className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-70'
      >
        {text}
      </span>
    </>
  );
};

export default Tooltip;
