/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

      < div className = "Navbar" >1223 </ div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
