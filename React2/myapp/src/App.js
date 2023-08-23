import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div>
      <NavBar/>
      <HomeCarousel/>
      <ProjectCard/>
    </div>
  );
}

export default App;
