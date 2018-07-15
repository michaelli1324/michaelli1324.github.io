import React, {Component} from 'react'

import './style.scss';

const Section = ({title, children}) =>  (
  <div className="section">
    {title &&
      <h6 className="bold">
        {title}
      </h6>
    }
    <div className="section-units">
      {children}
    </div>
  </div>
)

export default Section
