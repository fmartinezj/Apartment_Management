import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewTenantForm from "./NewTenantForm";

class NewTenantModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Tenant";
    var button = <Button onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Tenant";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewTenantForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              tenant={this.props.tenant}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewTenantModal;
