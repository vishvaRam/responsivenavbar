import React, { Component } from "react";
import TitleBar from "./components/AppBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "100%" }}>
          <TitleBar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
