import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  name: Yup
    .string()
    .required("Item name required")
    .max(20, "Item name must not exceed 20 characters"),
  Category: Yup.string().required("Category is required"),
  Description: Yup.string().required("Description is required"),
  Address: Yup.string().required("Address is required"),
  Canton: Yup.number().required("Canton is required"),
  City: Yup.string().required("City is required"),
  Postal_code: Yup.number().required("Postal code is required"),
  Phone: Yup.number().required("Phone number is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  terms: Yup.bool().oneOf([true], "Accept Terms is required"),
});


const Example = () => (
  <div>
    <h1>Displaying Error Messages</h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={Schema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {/* If this field has been touched, and it contains an error, display it
           */}
          {touched.name && errors.name && <div>{errors.name}</div>}

          <Field name="email" />
          {/* If this field has been touched, and it contains an error, display
           it */}
          {touched.email && errors.email && <div>{errors.email}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Example