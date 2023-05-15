// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';
import BuzzwordBingo from './BuzzwordBingo';
import Contact from './Contact';
import Menu from './Menu';
import Projects from './Projects';
import Start from './Start';
import Timeline from './Timeline';

import ProjectLifeCode from './projects/ProjectLifeCode';
import ProjectResumeWebsite from './projects/ProjectResumeWebsite';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Start />
          <Menu />
          <AboutMe />
          <BuzzwordBingo />
          <Projects />
          <Timeline />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Contact />
        </>
      } />
      <Route path="/projects/resume-website" element={<ProjectResumeWebsite />} />
      <Route path="/projects/life-code" element={<ProjectLifeCode />} />
    </Routes>
  );
};

export default App;