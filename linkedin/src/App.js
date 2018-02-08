import React, { Component } from "react";
import Header from "./components/Header/Header";
import dummyData from "./dummy-data";
import UserGrid from "./components/UserGrid/UserGrid";
import "./reset.css";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container d-flex">
          <div className="col-md-2 column-style panel">Left Column</div>
          <div className="col-md-7">
            <div className="col-md-12 panel-invitation panel d-flex justify-content-between align-items-center">
              <span>No pending Invitations</span>
              <span class="panel-invitation__link">Manage All</span>
            </div>
            <UserGrid />
          </div>
          <div className="col-md-3 column-style panel">Right Column</div>
        </div>
      </div>
    );
  }
}

export default App;
