import React from 'react';
import Title from './Title';
import { motion as m } from 'framer-motion';

function Contact() {
  return (
    <m.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex flex-col mb-10 mx-auto"
    >
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/(customSlugHere)"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Work With Me
          </button>
        </form>
      </div>
    </m.div>
  );
}

export default Contact;
