//import { Form, Col, Row, Button } from "react-bootstrap";
import React, { useState, UseEffect } from "react";
import { useForm } from "react-hook-form";
//import { Formik, Field } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import firebase from "firebase/app";
//import database from "./firebase-config";
import uuid from "uuid";
//import "firebase/database";
import cdata from "./canton-city.json";
//import FilterCities from './filterdroplist'

function FormFinal() {
  const [selectedCanton, setSelectedCanton] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const availableCity = cdata.find(
    (item) => item.admin_name === selectedCanton
  );
  // Canton names filtered and cleaned off repetitions as allCantons
  let allCantons = ["All", ...new Set(cdata.map((item) => item.admin_name))];

  // Below function filters data to get Canton specific cities that is selected on the dropdown list
  const filters = {
    admin_name: [selectedCanton],
  };

  // ignores case-sensitive
  const getValue = (value) =>
    typeof value === "string" ? value.toUpperCase() : value;
  // Main function filters according to selectedCanton
  const FilterCities = (array, filters) => {
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

  const filteredList = FilterCities(cdata, filters);
  const userId = uuid();

  const Schema = Yup.object().shape({
    Name: Yup.string().required("Item Name required"),
    Category: Yup.string().required("Category is required"),
    Description: Yup.string().required("Description is required"),
    Address: Yup.string().required("Address is required"),
    Canton: Yup.string().required("Canton is required"),
    City: Yup.string().required("City is required"),
    Postal_code: Yup.number().required("Postal code is required"),
    Phone: Yup.number().required("Phone number is required"),
    Email: Yup.string().required("Email is required").email("Email is invalid"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  // get functions to build form with useForm() hook
  const formOptions = { resolver: yupResolver(Schema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // Posting data to MySQLDB
  const PostDataDB = (data) => {
    console.log(data);

    fetch("http://localhost:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Donation Form Data Posted to MYSQL DB");
      });
    WriteUserData(data);
  };

  // Posting data to Firebase DB
  const WriteUserData = (data) => {
    console.log(data);
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
    <div className="card m-1">
      <h5 className="card-header">Donation Form</h5>

      <div className="card-body">
        <form onSubmit={handleSubmit(PostDataDB)}>
          <div className="form-row">
            <div className="form-group col-5">
              <label>Item Name</label>
              <input
                name="Name"
                type="text"
                {...register("Name")}
                className={`form-control ${errors.Name ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.Name?.message}</div>
            </div>
            {/* CATEGORIES  */}
            <div className="form-group col-5">
              <label for="validationDefault04">Category</label>
              <select
                id="validationDefault04"
                name="Category"
                {...register("Category")}
                className={`form-control ${
                  errors.Category ? "is-invalid" : ""
                }`}
              >
                <option selected disabled value="">
                  --Choose Category--
                </option>
                <option value="Computers and Related Parts">
                  Computers and Related Parts
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Household appliances">
                  Household Appliances
                </option>
                <option value="Furniture">Furniture</option>
                <option value="Clothing and Shoes">Clothing and Shoes</option>
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
              <div className="invalid-feedback">{errors.Category?.message}</div>
            </div>
            {/* DESCRIPTION  */}
            <div className="form-group col-10">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                name="Description"
                type="text"
                {...register("Description")}
                className={`form-control ${
                  errors.Description ? "is-invalid" : ""
                }`}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <div className="invalid-feedback">
                {errors.Description?.message}
              </div>
            </div>
            {/* ADDRESS  */}
            <div className="form-group col-10">
              <label for="inputAddress">Address</label>
              <input
                name="Address"
                type="text"
                {...register("Address")}
                className={`form-control ${errors.Address ? "is-invalid" : ""}`}
                id="inputAddress"
              />
              <div className="invalid-feedback">{errors.Address?.message}</div>
            </div>
            {/* CANTON  */}
            <div className="form-row">
              <div className="form-group col-4">
                <label for="validationDefault04">Canton</label>
                <select
                  id="validationDefault04"
                  name="Canton"
                  {...register("Canton")}
                  value={selectedCanton}
                  onChange={(e) => setSelectedCanton(e.target.value)}
                  className={`form-control ${
                    errors.Canton ? "is-invalid" : ""
                  }`}
                >
                  <option selected disabled value="">
                    --Choose Canton--
                  </option>
                  {allCantons.map((value, key) => {
                    return (
                      <option value={value} key={key}>
                        {value}
                      </option>
                    );
                  })}
                </select>
                <div className="invalid-feedback">{errors.Canton?.message}</div>
              </div>
              {/* CITY  */}
              <div className="form-group col-4">
                <label for="validationDefault04">City</label>
                <select
                  id="validationDefault04"
                  name="City"
                  {...register("City")}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={`form-control ${errors.City ? "is-invalid" : ""}`}
                >
                  <option selected disabled value="">
                    --Choose City--
                  </option>
                  {availableCity &&
                    filteredList.map((item, key) => {
                      return (
                        <option value={item.city} key={key}>
                          {item.city}
                        </option>
                      );
                    })}
                </select>
                <div className="invalid-feedback">{errors.City?.message}</div>
              </div>
              {/* POSTAL CODE  */}
              <div className="form-group col-3 md-3 mb-3">
                <label for="validationCustom05">Postal Code</label>
                <input
                  type="number"
                  name="Postal_code"
                  {...register("Postal_code")}
                  className={`form-control ${
                    errors.Postal_code ? "is-invalid" : ""
                  }`}
                  id="validationCustom05"
                />
                <div className="invalid-feedback">
                  {errors.Postal_code?.message}
                </div>
              </div>
            </div>
            {/* EMAIL  */}
            <div className="form-group col-5">
              <label>Email</label>
              <input
                name="Email"
                type="text"
                {...register("Email")}
                className={`form-control ${errors.Email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.Email?.message}</div>
            </div>
            {/* PHONE  */}
            <div className="form-group col-5">
              <label>Phone</label>
              <input
                name="Phone"
                type="number"
                {...register("Phone")}
                className={`form-control ${errors.Phone ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.Phone?.message}</div>
            </div>
            {/*Accept Terms & Conditions*/}
            <div className="form-group col-3 form-check">
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
              <input
                name="acceptTerms"
                class="form-check-input"
                type="checkbox"
                id="acceptTerms"
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>

            {/* SUBMIT BUTTON  */}

            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-1">
                Register
              </button>

              {/* RESET BUTTON  */}
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-secondary"
              >
                Reset
              </button>
            </div>
            <div className="form-group col-10">
              <input
                class="form-control"
                name="id"
                type="text"
                placeholder={`Form-id: ${userId}`}
                readOnly
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormFinal;
