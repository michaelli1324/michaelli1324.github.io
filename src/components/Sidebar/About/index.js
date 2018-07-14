import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navbar from '../../Navbar'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Link to="/">
          <div className="image"></div>
        </Link>

        <Navbar />
      </div>
    )
  }
}

export default About
