import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { TENANT_URL } from "../constants";

class NewTenantForm extends React.Component {
  state = {
    pk: 0,
    first_name: "",
    last_name: "",
  };

  componentDidMount() {
    if (this.props.tenant) {
      const { pk, name, document, email, phone } = this.props.tenant;
      this.setState({ pk, name, document, email, phone });
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
          <Label for="first_name">Name:</Label>
          <Input
            type="text"
            name="first_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Document:</Label>
          <Input
            type="text"
            name="last_name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.document)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTenantForm;
