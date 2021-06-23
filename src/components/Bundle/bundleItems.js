import React from 'react';
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import { Card, Button } from 'react-bootstrap'


const BundleItems = () => {
  const { items, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }

    return (
<section className='movies'>
      {items.map((item) => {
        console.log(item)
        //const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        const { item_id:id, Name: name, Category: category, Description: description } = item

        return (

          <Link to={`/items/${id}`} key={id} className='movie'>
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
          Back to Homepage
        </Link>
            </Button>
        </Card.Body>
      </Card>

          </Link>
        )
      })}
    </section>  
  )
          }

export default BundleItems;

