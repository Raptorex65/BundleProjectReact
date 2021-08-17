import React from 'react';
import { useGlobalContext } from './context'
import SingleItem from './singleitem'
import { Container, Row, Col } from 'react-bootstrap';

function BundleItems() {
  const { items, loading } = useGlobalContext()

  if (loading ) {
    return <div className='loading'>Loading bundle</div>
  }
        
  if (items.length < 1) {
    return (
      <h2 className='section-title'>
        no items matched your search criteria
      </h2>
    )
  }

  return (
<Container fluid>
  <Row className="justify-content-md-center row-design" xs={2} md={4} lg={4}>
    {items.map((item) => {
     return <Col md="auto" className='col-design'>
              <SingleItem key={item.id} {...item} />
          </Col>
    })}
  </Row>
</Container> 
  )
}

export default BundleItems
