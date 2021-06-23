import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch';
import { Card, Button } from 'react-bootstrap'
const SingleItem = () => {
  const { id } = useParams()
  const { isLoading, error, data: item } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          Back to Homepage
        </Link>
      </div>
    )
  }
  const { Name: name, Category: category, Description: description } = item

  return (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{category}</Card.Title>

          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">
            <Link to='/' className='btn'>
          back to movies
        </Link>
            </Button>
        </Card.Body>
      </Card>



    
  )
}

export default SingleItem
