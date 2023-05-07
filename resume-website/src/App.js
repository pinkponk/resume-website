// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Menu from './Menu';
import Projects from './Projects';
import Start from './Start';
import Timeline from './Timeline';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Start />
            <Menu />
            <AboutMe />
            <Projects />
            <Timeline />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;