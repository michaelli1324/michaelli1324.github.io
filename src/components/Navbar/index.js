import React, { Component } from 'react';
import Link from 'gatsby-link';

import resume from '../../assets/files/Resume.pdf'

class Navbar extends Component {
  render () {
    return(
      <div className="navbar">
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/projects">Work</Link>
        <a className="navbar-item" href={resume}>Resume</a>
        <Link className="navbar-item" to="#">Contact</Link>
      </div>
    )
  }
}

export default Navbar
