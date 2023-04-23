import React, { Component, Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewTenantForm from "./NewTenantForm";

const NewTenantModal = ({ create, resetState, tenant }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  let title = "Editing Tenant";
  let button = <Button onClick={toggle}>Edit</Button>;

  if (create) {
    title = "Creating New Tenant";

    button = (
      <Button
        color="primary"
        className="float-right"
        onClick={toggle}
        style={{ minWidth: "200px" }}
      >
        Create New
      </Button>
    );
  }

  return (
    <Fragment>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>

        <ModalBody>
          <NewTenantForm
            resetState={resetState}
            toggle={toggle}
            tenant={tenant}
          />
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewTenantModal;
