import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { motion as m } from 'framer-motion';

function Intro() {
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
    -webkit-text-fill-color: transparent;
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
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ duration: 1, opacity: 0 }}
      className="flex items-center justify-center flex-col text-center pt-40 pb-6"
    >
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        <p className="text-xs text-left">Hi, I'm</p>
        Jerry,
      </h1>
      <div className="overflow-hidden">
        <m.p
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: '0%' }}
          transition={{ delay: 0.75, duration: 0.75, ease: 'easeOut' }}
          className="text-7xl md:text-7xl mb-3 font-medium pt-5"
        >
          <AnimatedGradientText>Fullstack Developer</AnimatedGradientText>
        </m.p>
      </div>
      <text className="text-sm max-w-xl mb-6 font-bold">
        I'm a fullstack developer exploring the software engineering world.
        <br />
        This is the first version of my personal portfolio. Please take a look
        around and let me know what you think about it!
        <br />
        The website is made with React, Framer Motion, Styled Components,
        Tailwind CSS. Data is served on Strapi CMS.
      </text>
    </m.div>
  );
}

export default Intro;
