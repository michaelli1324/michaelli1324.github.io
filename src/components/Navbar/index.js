import React, { Component } from 'react';
import Link from 'gatsby-link';

class Navbar extends Component {
  render () {
    return(
      <div className="navbar">
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="#">Projects</Link>
        <Link className="navbar-item" to="#">Resume</Link>
        <Link className="navbar-item" to="#">Contact</Link>
      </div>
    )
  }
}

export default Navbar
