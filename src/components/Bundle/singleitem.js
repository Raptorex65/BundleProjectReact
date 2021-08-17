import React from 'react'
import Image from "./bundle-logo.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const SingleItem = (item) => {
console.log(item)
    return(
        <>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
        {item.description}
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to={`/items/${item.id}`}>
    <Button variant="primary" >
        Id:{item.id} 
    </Button>
    </Link>
  </Card.Body>
</Card>
</>
    )
}

export default SingleItem