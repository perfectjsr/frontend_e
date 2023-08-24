import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ImageCard = (props) => {
  return (
    <div>
    <Card style={{ width: '18rem' ,height: '45rem' }}>
    <Card.Img variant="top" src= {props.imgurl} />
    <Card.Body>
    {props.id}
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      <Button className='ImgButton' variant="primary">Get Details</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ImageCard
