import "./App.css";
import ReactDOM from "react-dom/client";
import React from "react";
import Tenant from "./pages/Tenant";
import ExpenseRecord from "./pages/ExpenseRecord";
import RentalRecord from "./pages/RentalRecord";
import MainMenu from "./pages/MainMenu";
import AnnualReport from "./pages/AnnualReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route path="/tenant" element={<Tenant />} />
            <Route path="/rentalrecord" element={<RentalRecord />} />
            <Route path="/expenserecord" element={<ExpenseRecord />} />
            <Route path="/annualreport" element={<AnnualReport />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
// function App() {
//   return (
//     <>
//       <Tenant />
//     </>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
