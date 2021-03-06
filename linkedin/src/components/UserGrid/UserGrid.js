import React, { Component } from 'react';
import GridItem from './GridItem/GridItem';
import dummyData from '../../dummy-data';
import './UserGrid.css';
class UserGrid extends Component {
  state = { dummyData };

  filteredUsers = dummyData.filter(user => {
    const name = user.first_name + ' ' + user.last_name;
    console.log(this.props.gridSearch);
    return name.indexOf('g') >= 0;
  });

  render() {
    return (
      <div className="user-grid d-flex flex-wrap col-md-12 panel">
        <div className="col-md-12 user-grid__header">
          <h3>People you may know</h3>
        </div>
        {this.filteredUsers.map(user => {
          return <GridItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default UserGrid;
