import React from "react";
import { Label, Input } from "reactstrap";
import { useField } from "formik";

const LabeledInput = ({labelText, ...props}) => {
  const [field, meta] = useField(props.name);

  console.log(meta);
  return (
    <>
      <Label for={props.name}>{labelText}</Label>
      <Input
        {...field}
        {...props}
      />
      <i class="bi bi-eye"></i>
      {meta.error && meta.touched && <div>{meta.error}</div>}
    </>
  );
};

export default LabeledInput;
