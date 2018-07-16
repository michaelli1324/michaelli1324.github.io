import React, { Component } from 'react';
import Link from 'gatsby-link';

import resume from '../../assets/files/Resume.pdf'

class Navbar extends Component {
  render () {
    return(
      <div className="navbar">
        <Link className="navbar-item" to="/about">About</Link>
        <Link className="navbar-item" to="/projects">Work</Link>
        <Link className="navbar-item" to="/contact">Contact</Link>
        <a className="navbar-item" href={resume}>Resume</a>
      </div>
    )
  }
}

export default Navbar
