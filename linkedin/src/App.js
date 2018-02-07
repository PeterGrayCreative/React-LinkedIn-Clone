import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header" />
        <div class="col-md-2">
        Left Column
        </div>
        <div class="col-md-7">
        Middle Column
        </div>
        <div class="col-md-3">
        Right Column
        </div>
      </div>
    );
  }
}

export default App;
