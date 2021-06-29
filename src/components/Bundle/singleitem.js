import React from 'react'
import { Link } from 'react-router-dom';
export default function SingleItem({ id, name, description, bundleItemPoint }) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src='' alt='' />
      </div>
      <div className='cocktail-footer'>
          
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{bundleItemPoint}</p>
        <Link to={`/item/${id}`} className='btn btn-primary btn-details'>
         item details
        </Link>
      </div>

    </article>
  )
}
