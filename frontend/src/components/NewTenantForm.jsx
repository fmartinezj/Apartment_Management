import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { TENANT_URL } from "../constants";

class NewTenantForm extends React.Component {
  state = {
    pk: 0,
    first_name: "",
    last_name: "",
    apartment_number: "",
    phone_number: "",
    email: "",
    lease_start: "",
  };

  componentDidMount() {
    if (this.props.tenant) {
      const {
        pk,
        first_name,
        last_name,
        apartment_number,
        phone_number,
        email,
        lease_start,
      } = this.props.tenant;
      this.setState({
        pk,
        first_name,
        last_name,
        apartment_number,
        phone_number,
        email,
        lease_start,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTenant = (e) => {
    e.preventDefault();
    axios.post(TENANT_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editTenant = (e) => {
    e.preventDefault();
    axios.put(TENANT_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.tenant ? this.editTenant : this.createTenant}>
        <FormGroup>
          <Label for="first_name">First Name:</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name:</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.last_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apartment_number">Apartment Number:</Label>
          <Input
            type="number"
            name="apartment_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.apartment_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone_number">Phone Number:</Label>
          <Input
            type="text"
            name="phone_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone_number)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lease_start">Lease Start Date:</Label>
          <Input
            type="date"
            name="lease_start"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.lease_start)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTenantForm;
