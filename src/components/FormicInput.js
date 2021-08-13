import React from "react";
import { useField } from "formik";

const FormicInput = (props) => {
  // this will return field props for an <input />
  console.log(props);
  const [field, meta] = useField(props.name);
  console.log('Field',field);
  console.log('Meta', meta);
  return (
    <>
      <input {...field} {...props} />
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default FormicInput;
