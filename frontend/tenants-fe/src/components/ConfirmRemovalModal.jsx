import React, { Component, Fragment, useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { TENANT_URL } from "../constants";

const ConfirmRemovalModal = ({ resetState, pk }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const deleteTenant = (pk) => {
    axios.delete(TENANT_URL + pk).then(() => {
      resetState();
      toggle();
    });
  };
};
// class ConfirmRemovalModal extends Component {
//   state = {
//     modal: false,
//   };

//   toggle = () => {
//     this.setState((previous) => ({
//       modal: !previous.modal,
//     }));
//   };

//   deleteTenant = (pk) => {
//     axios.delete(TENANT_URL + pk).then(() => {
//       this.props.resetState();
//       this.toggle();
//     });

//     return (
//       <Fragment>
//         <Button color="danger" onClick={() => toggle()}>
//           Remove
//         </Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle}>
//           <ModalHeader toggle={this.toggle}>
//             Do you really wanna delete the tenant?
//           </ModalHeader>

//           <ModalFooter>
//             <Button type="button" onClick={() => this.toggle()}>
//               Cancel
//             </Button>
//             <Button
//               type="button"
//               color="primary"
//               onClick={() => this.deleteTenant(this.props.pk)}
//             >
//               Yes
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </Fragment>
//     );
//   };

//   render() {
//     return (
//       <Fragment>
//         <Button color="danger" onClick={() => this.toggle()}>
//           Remove
//         </Button>
//         <Modal isOpen={modal} toggle={toggle}>
//           <ModalHeader toggle={toggle}>
//             Do you really wanna delete the tenant?
//           </ModalHeader>

//           <ModalFooter>
//             <Button type="button" onClick={() => toggle()}>
//               Cancel
//             </Button>
//             <Button
//               type="button"
//               color="primary"
//               onClick={() => deleteTenant(pk)}
//             >
//               Yes
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </Fragment>
//     );
//   }
// }

export default ConfirmRemovalModal;
