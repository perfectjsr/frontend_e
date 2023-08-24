import React from 'react'
import ImageCard from './ImageCard'
const ProjectCard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '5vh', flexWrap: 'wrap'}}>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
    </div>
  )
}

export default ProjectCard
