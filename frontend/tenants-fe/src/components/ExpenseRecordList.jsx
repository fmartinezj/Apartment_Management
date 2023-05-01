import React, { Component } from "react";
import { Table } from "reactstrap";
import NewExpenseModal from "./NewExpenseModal";

import ConfirmRemovalExpense from "./ConfirmRemovalExpense";

// const TenantList = ({ resetState }) => {
//   const tenants = tenants;
//   return (
//     <Table dark>
//       <thead>
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Apartment Number</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {!tenants || tenants.length <= 0 ? (
//           <tr>
//             <td colSpan="6" align="center">
//               <b>Ops, no one here yet</b>
//             </td>
//           </tr>
//         ) : (
//           tenants.map((tenant) => (
//             <tr key={tenant.pk}>
//               <td>{tenant.first_name}</td>
//               <td>{tenant.last_name}</td>
//               <td>{tenant.apartment_number}</td>
//               <td align="center">
//                 <NewTenantModal
//                   create={false}
//                   tenant={tenant}
//                   resetState={resetState}
//                 />
//                 &nbsp;&nbsp;
//                 <ConfirmRemovalModal pk={tenant.pk} resetState={resetState} />
//               </td>
//             </tr>
//           ))
//         )}
//       </tbody>
//     </Table>
//   );
// };
class ExpenseList extends Component {
  render() {
    const expense_records = this.props.expense_records;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payee</th>
            <th>Amount</th>
            <th>Budget Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!expense_records || expense_records.length <= 0 ? (
            <tr>
              <td colSpan="7" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            expense_records.map((expense_record) => (
              <tr key={expense_record.pk}>
                <td>{expense_record.date}</td>
                <td>{expense_record.payee}</td>
                <td>{expense_record.amount}</td>
                <td>{expense_record.budget_category}</td>
                <td align="center">
                  <NewExpenseModal
                    create={false}
                    expense_record={expense_record}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalExpense
                    pk={expense_record.pk}
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

export default ExpenseList;
