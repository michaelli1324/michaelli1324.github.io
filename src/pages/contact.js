import React from 'react'

import '../assets/scss/contact/style.scss'

const ContactPage = () => (
  <div className="contact container animated fadeIn">
    <div className="contact-content">
      <a className="contact-item" href="mailto:michael.li@berkeley.edu">
        michael.li@berkeley.edu
      </a>
      <a className="contact-item" href="https://github.com/michaelli1324" target="_blank">
        github
      </a>
      <a className="contact-item" href="https://www.linkedin.com/in/michael-li1/" target="_blank">
        linkedIn
      </a>
    </div>
  </div>
)

export default ContactPage
