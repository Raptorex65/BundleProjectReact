import React from 'react';
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
//import { Card, Button } from 'react-bootstrap'


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
        const { Id:id, Name: name, Description: description } = item
        
        return (
          <Link to={`/bundle/${id}`} key={id} className='movie'>
            <article>
              <img src='' alt={name} />
              <div className='movie-info'>
                <h4 className='title'>{name}</h4>
               <p>{description}</p>
              </div>
            </article>
          </Link>

          
        )
      })}
    </section>  
  )
          }

export default BundleItems;

