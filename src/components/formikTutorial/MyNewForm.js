import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import LabeledInput from "./components/LabeledInput";
import PasswordShowHide from "./components/PasswordShowHide";

const MyNewForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        check: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Please give a valid email address")
          .required("Please fill the email"),
        password: Yup.string()
          .min(6, "There must be 6 or more characters")
          .required("Please fill the password"),
        address: Yup.string()
          .max(200, "Not more than 200 characters")
          .required("Required"),
        address2: Yup.string()
          .max(200, "Not more than 200 characters")
          .required("Required"),
        city: Yup.string()
          .max(30, "Maximum character allowed is 30")
          .required("Required"),
        state: Yup.string()
          .max(30, "Maximum character allowed is 30")
          .required("Required"),
        zip: Yup.string()
          .matches(/^[1-9]\d*$/, "Must contain only numbers")
          .required("Required"),
        check: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          //FormikActions methenta ganna pluwn
          resetForm();
        }, 400);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Row form>
            <Col md={4}>
              <FormGroup>
                <LabeledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  labelText="Email"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <LabeledInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  labelText="Password"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
          <div>
            <label>Password</label>
            <Field
              name="password"
              className="form-control rounded-0"
              component={PasswordShowHide}
            />
          </div>
          </FormGroup>
          <FormGroup>
            <LabeledInput
              type="text"
              name="address"
              id="address"
              placeholder="1234 Main St"
              labelText="Address"
            />
          </FormGroup>
          <FormGroup>
            <LabeledInput
              type="text"
              name="address2"
              id="address2"
              placeholder="Apartment, studio, or floor"
              labelText="Address 2"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <LabeledInput
                  type="text"
                  name="city"
                  id="city"
                  labelText="City"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <LabeledInput
                  type="text"
                  name="state"
                  id="state"
                  labelText="State"
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <LabeledInput type="text" name="zip" id="zip" labelText="Zip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="check" />
            <Label for="check" check>
              Check me out
            </Label>
          </FormGroup>
          <Button type="submit">Sign in</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyNewForm;
