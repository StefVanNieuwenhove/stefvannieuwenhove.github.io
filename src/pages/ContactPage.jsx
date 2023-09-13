import React from 'react';

const ContactPage = () => {
  return (
    <article id='contact' className='w-full h-screen bg-beige'>
      <h1 className='w-full text-center text-black text-4xl'>Contact me</h1>
      <form className='w-full p-2'>
        <div className='w-full m-2 flex item-center'>
          <label>Name:</label>
          <input />
        </div>
        <div className='w-full m-2 flex item-center'>
          <label>Email</label>
          <input />
        </div>
        <div className='w-full m-2 flex item-center'>
          <label>Your message</label>
          <input />
        </div>
        <div>
          <button>send</button>
        </div>
      </form>
    </article>
  );
};

export default ContactPage;
