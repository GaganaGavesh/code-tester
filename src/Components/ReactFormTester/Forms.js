import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap";

const Example = (props) => {
  return (
    
      <Form>
          <div className="row">
        <div className="col-md-6">
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback tag="i">
              Oh noes! that name is already taken
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup>
            <Label for="exampleEmail">Input without validation</Label>
            <Input />
            <FormFeedback tooltip>
              You will not be able to see this
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid tooltip>
              Sweet! that name is available
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback tooltip>
              Oh noes! that name is already taken
            </FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </div>
        </div>
      </Form>
  );
};

export default Example;
