import React from "react";
import "./mainmenu.css";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="menu">
      <a className="title">Main Menu</a>
      <br />
      <ul className="pages">
        <li>
          <Link to="/tenant">Tenant</Link>
        </li>
        <li>
          <Link to="/rentalrecord">Rental Income Record</Link>
        </li>
        <li>
          <Link to="/expenserecord">Expense Record</Link>
        </li>
        <li>
          <Link to="/annualreport">Annual Report</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
