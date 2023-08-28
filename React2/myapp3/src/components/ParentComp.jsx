import React, { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    const [data, setdata] = useState(null);
    const HandleChild = (children) => {
        setdata(children)
    }
    return (
        <div>
            <ChildComp
                onDataFromChild={HandleChild}                      // onDataFromChild is a prop and HandleChild is a function
            />
            <p>{data}</p>
        </div>
    )
}

export default ParentComp
