import React, { Component, Fragment } from "react";
import Header from "./components/Header";

import Register from "./pages/register";

class App extends Component {
  render() {
    // Check if user is logged in
    // if yes go to home page
    // if no go to login
    return (
      <Fragment>
        {/* <Header /> */}
        <Register />
        {/* <Home /> */}
      </Fragment>
    );
  }
}

export default App;
