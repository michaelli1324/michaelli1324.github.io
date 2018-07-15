import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import berkeleyTime from '../../assets/images/experience/berkeleytime.png'
import yext from '../../assets/images/experience/yext.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section>
        <div className="row">
          <ExperienceUnit
            logo={yext}
            colour='#FFFFFF'
            title='Yext'
            role="Software Engineering Intern"
            link='https://www.yext.com/'
            timeperiod='Summer 2018'
            subtitle='Work with consulting team to build custom pages
              with optimized content to drive search traffic.
              and increase customer engagement'
          />

          <ExperienceUnit
            logo={berkeleyTime}
            colour='#5BB1E0'
            title='BerkeleyTime'
            link='https://www.berkeleytime.com/'
            role='Full Stack Engineer'
            timeperiod='2017 - '
            subtitle='Develop new features on the course discovery
              web application, allowing students to better
              navigate course enrollment on campus'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
