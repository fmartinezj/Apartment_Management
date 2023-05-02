import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav classname="nav">
      <a href="/" className="site-title">
        Apartment Manager
      </a>
      <ul>
        <li className="active">
          <a href="/tenant">Tenant List</a>
        </li>
        <li>
          <a href="/rentalrecord">Rental Income Records</a>
        </li>
        <li>
          <a href="/expenserecord">Expense Records</a>
        </li>
        <li>
          <a href="/annualreport">Annual Reports</a>
        </li>
      </ul>
    </nav>
  );
}
