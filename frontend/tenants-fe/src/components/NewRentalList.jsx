import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRentalModal from "./NewRentalModal";

import ConfirmRemovalRental from "./ConfirmRemovalRental";

class RentalList extends Component {
  render() {
    const rental_records = this.props.rental_records;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Apartment Number</th>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
            <th>July</th>
            <th>August</th>
            <th>September</th>
            <th>October</th>
            <th>November</th>
            <th>December</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!rental_records || rental_records.length <= 0 ? (
            <tr>
              <td colSpan="14" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            rental_records.map((rental_record) => (
              <tr key={rental_record.pk}>
                <td>{rental_record.apartment_number}</td>
                <td>{rental_record.january}</td>
                <td>{rental_record.february}</td>
                <td>{rental_record.march}</td>
                <td>{rental_record.april}</td>
                <td>{rental_record.may}</td>
                <td>{rental_record.june}</td>
                <td>{rental_record.july}</td>
                <td>{rental_record.august}</td>
                <td>{rental_record.september}</td>
                <td>{rental_record.october}</td>
                <td>{rental_record.november}</td>
                <td>{rental_record.december}</td>
                <td align="center">
                  <NewRentalModal
                    create={false}
                    rental_record={rental_record}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalRental
                    pk={rental_record.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default RentalList;
