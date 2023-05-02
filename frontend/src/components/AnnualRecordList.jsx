import React, { Component } from "react";
import { Table } from "reactstrap";

class AnnualRecordList extends Component {
  render() {
    const expense_records = this.props.expense_records;
    const rental_income_records = this.props.rental_income_records;
    // console.log(expense_records);
    // console.log("RR: ", rental_income_records.pk);
    return (
      <>
        <>
          <Table dark>
            <thead align="center">
              <tr>
                <th>Budget Category</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!expense_records || expense_records.length <= 0 ? (
                <tr>
                  <td colSpan="3" align="center">
                    <b>Ops, no one here yet</b>
                  </td>
                </tr>
              ) : (
                expense_records.map((expense_record) => (
                  <tr key={expense_record.budget_category}>
                    <td>{expense_record.budget_category}</td>
                    <td>{expense_record.amount}</td>
                    <td></td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </>
        <>
          <Table dark>
            <thead align="center">
              <tr>
                <th align="center">Total Rent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rental_income_records.total <= 0 ? (
                <tr>
                  <td colSpan="3" align="center">
                    <b>Ops, no one here yet</b>
                  </td>
                </tr>
              ) : (
                <tr key={rental_income_records.total}>
                  <td align="center">{rental_income_records.total}</td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </>
      </>
    );
  }
}

export default AnnualRecordList;
