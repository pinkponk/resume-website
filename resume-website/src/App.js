// src/App.js
import React from 'react';
import AboutMe from './AboutMe';
import Menu from './Menu';
import Projects from './Projects';
import Start from './Start';
import Timeline from './Timeline';

const App = () => {
  return (
    <>
      <Start />
      <Menu />
      <AboutMe />
      <Projects />
      <Timeline />
    </>
  );
};

export default App;