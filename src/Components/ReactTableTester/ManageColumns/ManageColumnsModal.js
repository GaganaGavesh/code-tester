import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    props.setToggleModal(!modal);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader >Select Column Fields to show</ModalHeader>
        <ModalBody>
          <div>
            {props.allColumns.map((column) => (
              <div key={column.accessor}>
                <label>
                  <input type="checkbox" {...column.getToggleHiddenProps()} />
                  {column.Header}
                </label>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="modal-Button" color="secondary" onClick={toggle}>
            Save and Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
