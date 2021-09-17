import React, { useState } from "react";
//import { ListGroup, Tab, Row, Col } from "react-bootstrap";
//import BundleItems from "./bundle/bundleItems";

const Categories = ({ categories, filterItems }) => {

  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
