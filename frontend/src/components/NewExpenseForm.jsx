import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { EXPENSE_URL } from "../constants";

class NewExpenseForm extends React.Component {
  state = {
    pk: 0,
    date: "",
    payee: "",
    amount: "",
    budget_category: "",
  };

  componentDidMount() {
    if (this.props.expense_record) {
      const { pk, date, payee, amount, budget_category } =
        this.props.expense_record;
      this.setState({ pk, date, payee, amount, budget_category });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createExpenseRecord = (e) => {
    e.preventDefault();
    axios.post(EXPENSE_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editExpenseRecord = (e) => {
    e.preventDefault();
    axios.put(EXPENSE_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form
        onSubmit={
          this.props.expense_record
            ? this.editExpenseRecord
            : this.createExpenseRecord
        }
      >
        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="date"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="payee">Payee:</Label>
          <Input
            type="text"
            name="payee"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.payee)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount:</Label>
          <Input
            type="number"
            step="0.01"
            name="amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.amount)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="budget_category">Budget Category:</Label>
          <Input
            type="text"
            name="budget_category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.budget_category)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewExpenseForm;
