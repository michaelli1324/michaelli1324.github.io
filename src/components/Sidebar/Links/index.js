import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/michaelli1324" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/michael-li1/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          {false &&
            <li className="icon">
              <a href="mailto:michael.li@berkeley.edu" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
          }
        </ul>
      </div>
    )
  }
}

export default Links
