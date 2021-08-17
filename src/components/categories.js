import React, { useState, useEffect } from 'react'
import {ListGroup, Tab, Row, Col} from 'react-bootstrap';
import { useGlobalContext } from '../components/bundle/context'
//import SingleItem from './bundle/singleitemnew2'
const url = `http://localhost:3000/category`

const Categories = () => {
  const { items } = useGlobalContext()
  console.log(items)
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([])
const FetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const categories = await response.json();
      console.log(categories)
      setCategories(categories);

    setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchCategories();
  }, []);


    if (loading) {
    return <div className='loading'></div>
  }

  return (
<Tab.Container id="list-group-tabs-example">
  <Row>
    <Col sm={10}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          {categories[0].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          {categories[1].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[2].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[3].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[4].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[5].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[6].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[7].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[8].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          {categories[9].name}
        </ListGroup.Item>


      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">

        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
          
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
          
        </Tab.Pane>

      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

  )
}

export default Categories