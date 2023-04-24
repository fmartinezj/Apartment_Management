import React, { Component } from "react";

// const Header = () => {
//   return (
//     <div className="text-center">
//       <img
//         width="300"
//         className="img-thumbnail"
//         style={{ marginTop: "20px" }}
//       />
//       <hr />
//       <h5>
//         <i>presents</i>
//       </h5>
//       <h1>App with React + Django</h1>
//     </div>
//   );
// };
class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
