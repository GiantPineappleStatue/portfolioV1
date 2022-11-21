import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import { motion as m } from 'framer-motion';
import NextButton from './NextButton';

function Timeline() {
  return (
    <m.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row justify-center pt-20">
        <div className="w-full md:w-7/12">
          <Title>Timeline</Title>
          {timeline.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
      <NextButton url={'/contact'} />
    </m.div>
  );
}

export default Timeline;
