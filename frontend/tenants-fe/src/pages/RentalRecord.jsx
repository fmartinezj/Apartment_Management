import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NewRentalList from "../components/NewRentalList";
import NewRentalModal from "../components/NewRentalModal";

import axios from "axios";

import { RENTAL_URL } from "../constants";

class RentalRecord extends Component {
  state = {
    rental_records: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getRentalRecords = () => {
    axios
      .get(RENTAL_URL)
      .then((res) => this.setState({ rental_records: res.data }));
  };

  resetState = () => {
    this.getRentalRecords();
  };

  render() {
    return (
      <div>
        <h1>Rental Income Records</h1>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <NewRentalList
                rental_records={this.state.rental_records}
                resetState={this.resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewRentalModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RentalRecord;
