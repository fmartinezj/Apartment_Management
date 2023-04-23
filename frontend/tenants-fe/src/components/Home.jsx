import React, { Component, setState } from "react";
import { Col, Container, Row } from "reactstrap";
import TenantList from "./TenantList";
import NewTenantModal from "./NewTenantModal";

import axios from "axios";

import { TENANT_URL } from "../constants";

const Home = () => {
  const [tenants, setTenant] = [];

  const componentDidMount = () => {
    resetState();
  };

  const getTenants = () => {
    axios.get(TENANT_URL).then((res) => setState({ tenants: res.data }));
  };

  const resetState = () => {
    getTenants();
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col>
          <TenantList tenants={setTenant} resetState={resetState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewTenantModal create={true} resetState={resetState} />
        </Col>
      </Row>
    </Container>
  );
};
// class Home extends Component {
//   state = {
//     tenants: [],
//   };

//   componentDidMount() {
//     this.resetState();
//   }

//   getTenants = () => {
//     axios.get(TENANT_URL).then((res) => this.setState({ tenants: res.data }));
//   };

//   resetState = () => {
//     this.getTenants();
//   };

//   render() {
//     return (
//       <Container style={{ marginTop: "20px" }}>
//         <Row>
//           <Col>
//             <TenantList
//               tenants={this.state.tenants}
//               resetState={this.resetState}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <NewTenantModal create={true} resetState={this.resetState} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Home;
