import React from 'react'
import DataContext from '../DataContext'
import BComponent from './BComponent'

const AComponent = () => {
    const information = " I am JSR"
    return (
        <DataContext.Provider value={information}>
            <div>
                AComponent
                <BComponent />
            </div>
        </DataContext.Provider>
    )
}

export default AComponent
