import React, { useState } from "react";
import { useItemsContext } from "../../context/items-context";
//import SingleItem from "./singleitem";
import MediaCard from "./singleitem_mu";
import { Container, Row, Col } from "react-bootstrap";
import Loading from '../loading'
function BundleItems({ items }) {
  const { loading } = useItemsContext();

  if (loading) {
    return <Loading />;
  }

  if (items.length < 1) {
    return (
      <h3 className="section-title">no items matched your search criteria</h3>
    );
  }

  return (
    <Container fluid>
      <Row
        className="justify-content-md-center row-design"
        xs={2}
        md={4}
        lg={4}
      >
        {items.map((item) => {
          return (
            <Col md="auto" className="col-design">
              <MediaCard key={item.id} {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default BundleItems;
