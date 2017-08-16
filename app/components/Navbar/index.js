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
  constructor() {
    super();
    this.state = {
      menuOpen:false
    }
  }

  handleMenu =() => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen:false
      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState({
        menuOpen:true
      })
    }
  }

  renderMenu() {
    if(this.state.menuOpen === true) {
      return (
        <nav className="navMobile">
          <Link to="/" className="navButton">Home</Link>
          <Link to="contact" className="navButton">Contact</Link>
          <a href="https://github.com/Technpoathic" className="navButton">Github</a>
        </nav>
      )
    }
  }


  render() {
    return(
      <div>
        <div className= "navBar">
          <div className="siteName">Site Name</div>
          <nav className="nav">
            <a href=""></a>
            <Link to="/"className="navButton">Home</Link>
            <Link to ="/contact" className="navButton">Contact</Link>
            <a href="https://github.com/Technpoathic" className="navButton">Github</a>
          </nav>
          <nav className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/contact" className="navButton">Contact</Link>
            <a href="https://github.com/Technpoathic" className="navButton">Github</a>
          </nav>

          <Bars className="menuIcon" onClick={this.handleMenu}/>

          <nav className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to="/contact" className="navButton">Contact</Link>
            <a href="https://github.com/Technpoathic" className="navButton">Github</a>
          </nav>

          <Bars className="menuIcon" onClick={this.handleMenu}/>


        </div>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.object
};
