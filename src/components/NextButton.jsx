import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const NextButton = ({ url }) => {
  return (
    <Link
      className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
      to={url}
    >
      >
    </Link>
  );
};

export default NextButton;
