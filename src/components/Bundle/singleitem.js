import React from 'react'
//import Image from "./bundle-logo.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
//import { useImagesContext } from '../../context/images-context';
import {imagesArray} from "../../forms/firebase-config";


const SingleItem = (item) => {
console.log(item)
  const { Name, Category, Description, id } = item;

/* {
  "id": 8,
  "Name": "Carpet",
  "Description": "Winter type thick",
  "Address": "Via pesca",
  "City": "Lugano",
  "Canton": "Ticino",
  "BundleItemPoint": 125,
  "createdAt": "2021-07-29T22:27:56.000Z",
  "updatedAt": "2021-07-29T22:27:56.000Z",
  "donaterId": null,
  "categoryId": null
}
*/
//const { urls, images } = useImagesContext()
    return (
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={imagesArray[0]} alt={"url"} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Card.Text>{Category}</Card.Text>
            <Card.Text>{Description}</Card.Text>

            <Link to={`/items/${id}`}>
              <Button variant="primary">Id:{item.id}</Button>
            </Link>
          </Card.Body>
        </Card>
    );
}

export default SingleItem