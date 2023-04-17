import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TenantList from "./TenantList";
import NewTenantModal from "./NewTenantModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    tenants: []
  };

  componentDidMount() {
    this.resetState();
  }

  getTenants = () => {
    axios.get(API_URL).then(res => this.setState({ tenants: res.data }));
  };

  resetState = () => {
    this.getTenants();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <TenantList
              tenants={this.state.tenants}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewTenantModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;