import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="navbar">
          <a className="navbar-item" href="#">About</a>
          <a className="navbar-item" href="#">Projects</a>
          <a className="navbar-item" href="#">Resume</a>
          <a className="navbar-item" href="#">Contact</a>
        </div>
      </div>
    )
  }
}

export default About
