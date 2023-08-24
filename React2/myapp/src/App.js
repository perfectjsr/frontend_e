import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImageCard from './components/ImageCard';
import data from './data';
import AccordionPart from './components/AccordionPart';

function App() {
  return (
    <div>
      <NavBar/>
      <HomeCarousel/>
      <h1 className='myheading'>23 BEST BOLLYWOOD MOVIES OF ALL TIME</h1>
      <div className='imgs'>
      {
        data.map((obj)=>{
          return (
            <div key={obj.id} className='Imgbox'>
            <ImageCard  title={obj.title} desc={obj.desc} imgurl={obj.imgurl}/>
            </div>
          )
        })
      }
      </div>
      <AccordionPart/>
    </div>
  );
}

export default App;
