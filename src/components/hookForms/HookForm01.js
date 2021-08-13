import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Input } from "reactstrap";

//import "./HookForms.css";

const HookForm01 = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="formContainer">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="formItemsContainer">
          <Input
            name="email"
            type="text"
            placeholder="Name"
            {...register("email", { required: true })}
          />
          {errors.email && <p>Required</p>}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Button type="submit" color="primary">
            LogIn
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default HookForm01;
