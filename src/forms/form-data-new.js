import { Form, Col, Row, Button } from "react-bootstrap";
import React, { useState, UseEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import firebase from "firebase/app";
import database from "./firebase-config";
import uuid from "uuid";
//import "firebase/database";
import data from "./canton-city.json";

const userId = uuid();

function FormFinal() {
  const { register, handleSubmit } = useForm();
  // Canton names filtered and cleaned of repetitions as allCantons
  let allCantons = ["All", ...new Set(data.map((item) => item.admin_name))];
  console.log(allCantons);

  const [selectedCanton, setSelectedCanton] = useState();
  const [selectedCity, setSelectedCity] = useState();

  // Below function filters data to get Canton specific cities that is selected on the dropdown list
  const filters = {
    admin_name: [selectedCanton],
  };

  const availableCity = data.find((item) => item.admin_name === selectedCanton);

  // ignores case-sensitive
  const getValue = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;
  // Main function filters according to selectedCanton
  const FilterPlainArrayWithOR = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      // filters using the (OR) operator
      return filterKeys.some((key) => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(
          (filter) => getValue(filter) === getValue(item[key])
        );
      });
    });
  };

  const filteredList = FilterPlainArrayWithOR(data, filters);
  console.log(filteredList);

  const onSubmit = (data) => {
    // Posting data to Mysql DB
    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Donation Form Data Posted to MYSQL DB");
      });
    // Posting data to Firebase DB
    WriteUserData(data);
  };

  // Posting data to Firebase DB
  const WriteUserData = (data) => {
    const {
      Name,
      Category,
      Description,
      Address,
      Canton,
      City,
      Postal_code,
      Email,
      Phone,
    } = data;

    firebase
      .database()
      .ref("users/" + userId)
      .set({
        id: userId,
        name: Name,
        category: Category,
        desc: Description,
        address: Address,
        canton: Canton,
        city: City,
        postal_code: Postal_code,
        email: Email,
        phone: Phone,
      })
      .then(() => {
        console.log("Firebase'e Kayit Eklendi");
      })
      .catch((e) => {
        console.log("Error Kayit Eklenemedi!!!");
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                {...register("Name", { required: true, maxLength: 20 })}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formCategory">
              <form>
                <label> Category</label>
                <div className="form-control">
                  <select {...register("Category")}>
                    <option>--Choose Category--</option>
                    <option value="Computers and Related Parts">
                      Computers and Related Parts
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Household appliances">
                      Household appliances
                    </option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing and Shoes">
                      Clothing and Shoes
                    </option>
                    <option value="Kitchenware">Kitchenware</option>
                    <option value="Bycyles and Parts">Bycyles and Parts</option>
                    <option value="Office Products">Office Products</option>
                    <option value="Sporting Goods">Sporting Goods</option>
                    <option value="Games and Toys">Games and Toys</option>
                    <option value="Art and Collectibles">
                      Art and Collectibles
                    </option>
                    <option value="Books, CDs and Videos">
                      Books, CDs and Videos
                    </option>
                    <option value="Auto Parts">Auto Parts</option>
                  </select>
                </div>
              </form>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} {...register("Description")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" {...register("Address")} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formCanton">
            <form>
              <label> Canton</label>
              <div className="form-control">
                <select
                  {...register("Canton")}
                  placeholder="Canton"
                  value={selectedCanton}
                  onChange={(e) => setSelectedCanton(e.target.value)}
                >
                  <option>--Choose Canton--</option>
                  {allCantons.map((value, key) => {
                    return (
                      <option value={value} key={key}>
                        {value}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </Form.Group>

          <Form.Group as={Col} controlId="formCity">
            <form>
              <label> City</label>
              <div className="form-control">
                <select
                  {...register("City")}
                  placeholder="City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option>--Choose City--</option>
                  {availableCity &&
                    filteredList.map((item, key) => {
                      return (
                        <option value={item.city} key={key}>
                          {item.city}
                        </option>
                      );
                    })}
                </select>
              </div>
            </form>
          </Form.Group>

          <Form.Group as={Col} controlId="formPostalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="number" {...register("Postal_code")} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register("Email")} />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" {...register("Phone")} />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formId">
              <Form.Control
                {...register("id")}
                type="number"
                placeholder={`Form-id: ${userId}`}
                readOnly
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formButton">
              <Button variant="info" type="submit" size="lg">
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default FormFinal;
