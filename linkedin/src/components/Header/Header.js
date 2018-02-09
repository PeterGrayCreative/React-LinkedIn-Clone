import React from 'react';
import Menu from './Menu/Menu';
import './Header.css';
import logo from './logo.png';

function Header(props) {
  return (
    <div className="header">
      <div className="container header-container d-flex flex-row">
        <div className="col-md-5 d-flex flex-row align-items-center">
          <img className="logo" src={logo} />
          <form>
            <input placeholder="Search" onChange={props.callbackFunc} />
          </form>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
