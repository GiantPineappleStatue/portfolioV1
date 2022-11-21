import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import { motion as m } from 'framer-motion';
import NextButton from './NextButton';

function Portfolio() {
  return (
    <>
      <m.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: '0%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col pt-20 md:flex-row items-center justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project, i) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              key={i}
            />
          ))}
        </div>
      </m.div>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <NextButton url={'/timeline'} />
      </div>
    </>
  );
}

export default Portfolio;
