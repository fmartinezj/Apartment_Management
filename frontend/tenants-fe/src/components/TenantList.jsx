import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTenantModal from "./NewTenantModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TenantList extends Component {
  render() {
    const tenants = this.props.tenants;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!tenants || tenants.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            tenants.map((tenant) => (
              <tr key={tenant.pk}>
                <td>{tenant.first_name}</td>
                <td>{tenant.last_name}</td>
                <td align="center">
                  <NewTenantModal
                    create={false}
                    tenant={tenant}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={tenant.pk}
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

export default TenantList;
