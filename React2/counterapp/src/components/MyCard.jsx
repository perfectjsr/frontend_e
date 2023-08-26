import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';


const MyCard = () => {
    const [Count, setCount] = useState(0);
    const HandleclickI = () => {
        setCount(Count + 1)
        console.log("button is clicked", Count);
    }
    const HandleclickD = () => {
        setCount(Count - 1)
        if(Count>0){
            console.log("button is clicked", Count);
        }
        else{
            alert("Minimum click amount reached i.e. 0")
            setCount(0)
            console.log("Minimum click amount reached i.e. 0", Count);
        }
    }

    return (
        <div>
            <Card className='card' >
                <h1>The no. of movie tickets booked are : {Count}</h1>
                <Button onClick={HandleclickI}>Increase(+1)</Button>
                <Button onClick={HandleclickD}>Decrease(-1)</Button>
            </Card>
        </div>
    )
}

export default MyCard
