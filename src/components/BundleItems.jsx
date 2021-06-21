import React, { useState, useEffect} from 'react';
//import Grid from '@material-ui/core/Grid';
import axios from 'axios';
//import Item from './Bundle/Item';
//import useStyles from './styles';
import {Card} from 'react-bootstrap';


  const getBundleItems = () => {

    const [dbItems, setdbItems] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      axios.get("http://localhost:3000/items")
        .then((data) => {
        setdbItems(data.data);

          console.log(data);
        })
        .catch((err) => console.log(err))
        setIsLoading(false)
    }, [])
  
    if (isLoading){
      return <p>LOADING...</p>
    }

  return (
      <div>
          {dbItems.map((item) => 
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text>
                {item.category}
              </Card.Text>
              <Card.Text>
                {item.bundleItemPoint}
              </Card.Text>
            </Card.Body>
          </Card>
            )}
</div>         
  
  )
          }

export default getBundleItems;

