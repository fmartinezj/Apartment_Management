import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ExpenseRecordList from "../components/ExpenseRecordList";
import NewExpenseModal from "../components/NewExpenseModal";

import axios from "axios";

import { EXPENSE_URL } from "../constants";

class ExpenseRecord extends Component {
  state = {
    expense_record: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getExpenseRecord = () => {
    axios
      .get(EXPENSE_URL)
      .then((res) => this.setState({ expense_record: res.data }));
  };

  resetState = () => {
    this.getExpenseRecord();
  };

  render() {
    return (
      <div>
        <h1>Expense Records</h1>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <ExpenseRecordList
                expense_record={this.state.expense_record}
                resetState={this.resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewExpenseModal create={true} resetState={this.resetState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ExpenseRecord;
