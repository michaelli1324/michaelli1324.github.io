import React, { Component } from 'react'
import About from './About'
import Links from './Links'

import './style.scss';

class Sidebar extends Component {
  render () {
    return (
      <div className="index">
        <div className="aside">
          <div className="top">
            <About />
          </div>
          <div className="bottom">
            <Links />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
