/**
*
* Navbar
*
*/

import React from 'react';
import {Link } from "react-router";

import './style.css';
import './styleM.css';

import Bars from 'react-icons/lib/fa/bars';




export default class Navbar extends React.PureComponent {
  render() {
    return (
      <div>
        <div className= "navBar">
          <div className="siteName">Site Name</div>
          <nav className="nav">
            <a href=""></a>
            <Link to="/"className="navButton">Home</Link>
            <Link to ="/contact" className="navButton">Contact</Link>
            <a href="https://github.com/Technpoathic" className="navButton">Github</a>
          </nav>


        </div>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
};
