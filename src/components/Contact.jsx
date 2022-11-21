import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion as m } from 'framer-motion';

function Contact() {
  const hue = keyframes`
   from {
     -webkit-filter: hue-rotate(0deg);
   }
   to {
     -webkit-filter: hue-rotate(-360deg);
   }
  `;
  const AnimatedGradientText = styled.h1`
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    -webkit-animation: ${hue} 15s infinite linear;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-feature-settings: 'kern';
    font-size: 48px;
    font-weight: 700;
    line-height: 48px;
    overflow-wrap: break-word;
    text-align: center;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
  `;
  return (
    <m.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex flex-col mb-10 mx-auto pt-20"
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
          <AnimatedGradientText>
            {' '}
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
            >
              Work With Me
            </button>
          </AnimatedGradientText>
        </form>
      </div>
    </m.div>
  );
}

export default Contact;
