import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RentalList from "../components/NewRentalList";
import NewRentalModal from "../components/NewRentalModal";

import axios from "axios";

import { RENTAL_URL } from "../constants";

class RenalIncomeRecord extends Component {
  state = {
    rental_income_records: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getRentalIncomeRecords = () => {
    axios
      .get(RENTAL_URL)
      .then((res) => this.setState({ rental_income_records: res.data }));
  };

  resetState = () => {
    this.getRentalIncomeRecords();
  };

  render() {
    return (
      <div>
        <h1>Rental Income Records</h1>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <RentalList
                rental_income_records={this.state.rental_income_records}
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

export default RenalIncomeRecord;
