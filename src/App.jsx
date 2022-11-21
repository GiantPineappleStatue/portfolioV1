import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode={'wait'}>
        <Navbar />
        <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
          <div className="max-w-5xl w-11/12 mx-auto">
            <Routes>
              <Route key="home" path="/" element={<Intro />} />
              <Route
                key="portfolio"
                path="/Portfolio"
                element={<Portfolio />}
              />
              <Route key="contact" path="/Contact" element={<Contact />} />
              <Route key="timeline" path="/Timeline" element={<Timeline />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </Router>
  );
}

export default App;
