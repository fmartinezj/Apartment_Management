import React, { Component, Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewTenantForm from "./NewTenantForm";

// const NewTenantModal = ({ create, resetState, tenant }) => {
//   const [modal, setModal] = useState(false);

//   const toggle = () => {
//     setModal(!modal);
//   };

//   let title = "Editing Tenant";
//   let button = <Button onClick={toggle}>Edit</Button>;

//   if (create) {
//     title = "Creating New Tenant";

//     button = (
//       <Button
//         color="primary"
//         className="float-right"
//         onClick={toggle}
//         style={{ minWidth: "200px" }}
//       >
//         Create New
//       </Button>
//     );
//   }

//   return (
//     <Fragment>
//       {button}
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>{title}</ModalHeader>

//         <ModalBody>
//           <NewTenantForm
//             resetState={resetState}
//             toggle={toggle}
//             tenant={tenant}
//           />
//         </ModalBody>
//       </Modal>
//     </Fragment>
//   );
// };

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
