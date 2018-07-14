import React from 'react'

import '../assets/scss/home/style.scss'

const IndexPage = () => (
  <div className="main">
    <h3 className="home-title">
      Hi, I'm <span className="bold">Michael Li</span>
    </h3>

    <h4 className="home-description">
      I am currently a student at UC Berkeley studying Electrical Engineering Computer Science (EECS) and
      Business Administration. Additionally, I am a member of the inaugural class in the&nbsp;
      <a className="home-descriptionLink" href="http://met.berkeley.edu/">
        Management, Entrepreneurship, & Technology Program
      </a>
      &nbsp;here, a collaborative effort between Berkeley's College of Engineering and Haas School of Business.
    </h4>
  </div>
)

export default IndexPage
