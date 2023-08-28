import React, { useContext } from 'react'
import DataContext from '../DataContext'

const DComponent = () => {
    const sharedData = useContext(DataContext)
  return (
    <div>
      DComponent
      <p>Information received from above hierarchy:{sharedData}</p>
    </div>
  ) 
}

export default DComponent
