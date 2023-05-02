import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AnnualRecordList from "../components/AnnualRecordList";

import axios from "axios";

import { EXPENSE_SUM_URL, RENTAL_SUM_URL } from "../constants";

class AnnualReport extends Component {
  state = {
    expense_records: [],
    rental_income_records: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getAnnualRecords = () => {
    axios
      .get(EXPENSE_SUM_URL)
      .then((res) => this.setState({ expense_records: res.data }));
    axios
      .get(RENTAL_SUM_URL)
      .then((res) => this.setState({ rental_income_records: res.data }));
  };

  resetState = () => {
    this.getAnnualRecords();
  };

  render() {
    console.log(this.state.rental_income_records);
    return (
      <div>
        <h1>Annual Records</h1>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <AnnualRecordList
                expense_records={this.state.expense_records}
                rental_income_records={this.state.rental_income_records}
                resetState={this.resetState}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AnnualReport;
