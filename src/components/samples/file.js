import React, { Component } from "react";
import { Formik, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import CustomImageInput from "./components/CustomImageInput";

import * as yup from "yup";

const TextInputComponent = ({ field, ...props }) => {
  console.log(field);
  console.log(props);
  const { errorMessage, touched } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <div>
      <TextField
        fullWidth
        name={name}
        error={touched && errorMessage ? true : false}
        label="Insert some text"
        helperText={touched && errorMessage ? errorMessage : undefined}
        onChange={onChange}
        onBlur={onBlur}
      />
      <pre>{JSON.stringify(props, 2, null)}</pre>
    </div>
  );
};

class App extends Component {
  render() {
    const FILE_SIZE = 160 * 1024;
    const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/png"
    ];
    const validationSchema = yup.object().shape({
      text: yup.string().required("A text is required"),
      file: yup
        .mixed()
        .required("A file is required")
        .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.type)
        )
    });
    return (
      <Formik
        initialValues={{
          file: undefined,
          text: undefined
        }}
        validationSchema={validationSchema}
        validateOnBlur={true}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue
        }) => {
          console.log(errors);
          return (
            <form>
              <Field
                name="file"
                component={CustomImageInput}
                title="Select a file"
                setFieldValue={setFieldValue}
                errorMessage={errors["file"] ? errors["file"] : undefined}
                touched={touched["file"]}
                style={{ display: "flex" }}
                onBlur={handleBlur}
              />
              <Field
                name="text"
                component={TextInputComponent}
                errorMessage={errors["text"]}
                touched={touched["text"]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <pre>
                {values.file
                  ? JSON.stringify(
                      {
                        fileName: values.file.name,
                        type: values.file.type,
                        size: `${values.file.size} bytes`
                      },
                      null,
                      2
                    )
                  : null}
              </pre>
              <pre>{values.text ? values.text : null} </pre>
            </form>
          );
        }}
      />
    );
  }
}
export default App;
