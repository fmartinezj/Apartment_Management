import React, { Component, setState } from "react";
import { Col, Container, Row } from "reactstrap";
import ExpenseList from "../components/ExpenseRecordList";
import NewExpenseModal from "../components/NewExpenseModal";

import axios from "axios";

import { EXPENSE_URL } from "../constants";

// const Home = () => {
//   const [tenants, setTenant] = [];

//   const componentDidMount = () => {
//     resetState();
//   };

//   const getTenants = () => {
//     axios.get(TENANT_URL).then((res) => setState({ tenants: res.data }));
//   };

//   const resetState = () => {
//     getTenants();
//   };

//   return (
//     <Container style={{ marginTop: "20px" }}>
//       <Row>
//         <Col>
//           <TenantList tenants={setTenant} resetState={resetState} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <NewTenantModal create={true} resetState={resetState} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
class ExpenseRecord extends Component {
  state = {
    expense_records: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getExpenseRecords = () => {
    axios
      .get(EXPENSE_URL)
      .then((res) => this.setState({ expense_records: res.data }));
  };

  resetState = () => {
    this.getExpenseRecords();
  };

  render() {
    return (
      <div>
        <h1>Expense Records</h1>
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <ExpenseList
                expense_records={this.state.expense_records}
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
