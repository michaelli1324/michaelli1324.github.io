import React, { Component } from 'react'
import Link from 'gatsby-link'
import Navbar from '../../Navbar'

import './style.scss'

import profImg from '../../../assets/images/michael.jpg'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Link to="/">
          <img className="image animated fadeIn" src={profImg}/>
        </Link>

        <Navbar />
      </div>
    )
  }
}

export default About
