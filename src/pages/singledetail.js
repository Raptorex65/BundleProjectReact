import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

const API_ENDPOINT_WHOLE ='http://localhost:3000/items/'

const SingleDetail = () =>  {
  const { id } = useParams()
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  const fetchItem = async (url) => {
        const response = await fetch(url)
        const item = await response.json();
        console.log(item);

        setItem(item)
        setLoading(false);

}
useEffect(() => {
    fetchItem(`${API_ENDPOINT_WHOLE}${id}`);
  }, [id]);

if (loading) { return <div className='loading'>LOADING itemdetail</div> }

  return (
 <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <div className='drink'>
          <div className='drink-info'>
            <h2 className='section-title'>Item Id:{}</h2>
            <p>
              <span className='drink-data'>Name :</span> {item.Name}
            </p>
            <p>
              <span className='drink-data'>description :</span> {item.Description}
            </p>            
            <p>
              <span className='drink-data'>bundleitempoint :</span> {item.BundleItemPoint}
            </p>
          </div>
        </div>
      </section>
  )
}

export default SingleDetail;
