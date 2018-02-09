import React, { Component } from 'react';
import Header from './components/Header/Header';
import UserGrid from './components/UserGrid/UserGrid';
import './reset.css';
import './App.css';

class App extends Component {
  state = {
    searchData: '',
  };
  filterSearch = e => {
    e.preventDefault();
    this.setState({ searchData: e.target.value });
    return;
  };

  render() {
    return (
      <div>
        <Header callbackFunc={this.filterSearch} />
        <div className="container d-flex">
          <div className="col-md-2 column-style panel">Left Column</div>
          <div className="col-md-7">
            <div className="col-md-12 panel-invitation panel d-flex justify-content-between align-items-center">
              <span>No pending Invitations</span>
              <span className="panel-invitation__link">Manage All</span>
            </div>
            <UserGrid gridSearchData={this.state.searchData} />
          </div>
          <div className="col-md-3 column-style panel">Right Column</div>
        </div>
      </div>
    );
  }
}

export default App;
