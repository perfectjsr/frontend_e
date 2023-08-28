import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCarousel from './components/HomeCarousel';
import ImageCard from './components/ImageCard';
import ParentComp from './components/ParentComp';
import AComponent from './components/AComponent';
//import data from './data';

function App() {
  // const [Data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const response = await fetch("https://dummyjson.com/products")
        
  //       const Data = await response.json()
  //       setData(Data.products)
  //     }
  //     catch (error) {
  //       console.error("Error occured ", error);
  //     }
  //   };
  //   fetchdata();
  // },[])
  return (
    <div>
    
      {/*<div className='imgs'>
        {
          Data.map((obj) => {
            return (
              <div key={obj.id} className='Imgbox '>
                <ImageCard title={obj.title} description={obj.description} image={obj.images[0]} />
              </div>
            )
          })
        }
      </div>*/}
      <AComponent/>
    </div>
  );
}

export default App;
