import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { RENTAL_URL } from "../constants";

class NewRentalForm extends React.Component {
  state = {
    pk: 0,
    apartment_number: "",
    january: "",
    february: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: "",
    total: 0,
  };

  componentDidMount() {
    if (this.props.rental_record) {
      const {
        pk,
        apartment_number,
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      } = this.props.rental_record;
      this.setState({
        pk,
        apartment_number,
        january,
        february,
        march,
        april,
        may,
        june,
        july,
        august,
        september,
        october,
        november,
        december,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createRentalRecord = (e) => {
    e.preventDefault();
    axios.post(RENTAL_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editRentalRecord = (e) => {
    e.preventDefault();
    axios.put(RENTAL_URL + this.state.pk, this.state).then(() => {
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
          this.props.rental_record
            ? this.editRentalRecord
            : this.createRentalRecord
        }
      >
        <FormGroup>
          <Label for="apartment_number">Apartment Number:</Label>
          <Input
            type="number"
            name="apartment_number"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.first_name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="january">January:</Label>
          <Input
            type="number"
            step="0.01"
            name="january"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.january)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="february">February:</Label>
          <Input
            type="number"
            step="0.01"
            name="february"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.february)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="march">March:</Label>
          <Input
            type="number"
            step="0.01"
            name="march"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.march)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="april">April:</Label>
          <Input
            type="number"
            step="0.01"
            name="april"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.april)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="may">May:</Label>
          <Input
            type="number"
            step="0.01"
            name="may"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.may)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="june">June:</Label>
          <Input
            type="number"
            step="0.01"
            name="june"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.june)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="july">July:</Label>
          <Input
            type="number"
            step="0.01"
            name="july"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.july)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="august">August:</Label>
          <Input
            type="number"
            step="0.01"
            name="august"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.august)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="september">September:</Label>
          <Input
            type="number"
            step="0.01"
            name="september"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.september)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="october">October:</Label>
          <Input
            type="number"
            step="0.01"
            name="october"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.october)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="november">November:</Label>
          <Input
            type="number"
            step="0.01"
            name="november"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.november)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="december">December:</Label>
          <Input
            type="number"
            step="0.01"
            name="december"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.december)}
          />
        </FormGroup>

        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewRentalForm;
