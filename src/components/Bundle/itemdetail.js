import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'


export default function Itemdetail () {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  
useEffect(() => {
    setLoading(true)
    async function fetchItem () {
      try {
        const response = await fetch(`http://localhost:3000/items${id}`);
        const data = await response.json();
        setDetail(data);
        console.log(data);
      
    } catch (error) {
        console.log("error")
      }
    setLoading(false);
  };
    fetchItem()
  }, [id])


  if (loading) {
    return <div className='loading'>LOADING</div>
  }


  return (
    
 <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{detail.id}</h2>
        <div className='drink'>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>description :</span> {detail.name}
            </p>
            <p>
              <span className='drink-data'>description :</span> {detail.description}
            </p>
            <p>
              <span className='drink-data'>bundleitempoint :</span> {detail.bundleItemPoint}
            </p>
   </div>
        </div>
      </section>
  )
}
  

