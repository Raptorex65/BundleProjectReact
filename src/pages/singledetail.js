import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
//import ItemImages from '../forms/item-imagesnew'
import styled from 'styled-components'
import { useImagesContext } from '../context/images-context';
import ItemImages from '../forms/item-images'
import QuiltedImageList from "../forms/imagesnew2";
const API_ENDPOINT_WHOLE ='http://localhost:3000/items/'

const SingleDetail = () =>  {
  const { id } = useParams()
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const {images, urls} = useImagesContext()
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
  <Wrapper className="about-page section section-center">
    <ItemImages urls={urls} />
    <article>
      <div className="title">
        <h2>our story</h2>
        <div className="underline"></div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
        accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
        delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
        Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt
      </p>
      <div className="drink-info">
        <h2 className="section-title">Item Id:{}</h2>
        <p>
          <span className="drink-data">Name :</span> {item.Name}
        </p>
        <p>
          <span className="drink-data">description :</span> {item.Description}
        </p>
        <p>
          <span className="drink-data">bundleitempoint :</span>{" "}
          {item.BundleItemPoint}
        </p>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
      <QuiltedImageList images={images} urls={urls} />
    </article>
  </Wrapper>
);
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default SingleDetail
