import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import stageHand from '../../assets/images/projects/stage-hand.png'
import smartBox from '../../assets/images/projects/smart-box.png'
import nest from '../../assets/images/projects/nest.jpg'
import snake from '../../assets/images/projects/snake.png'

const ProjectsSection = ({title}) => (
  <Section title={title}>
    <div className="row">
      <ExperienceUnit
        logo={stageHand}
        colour="#EE6D77"
        title="Stage Hand"
        link="https://github.com/InchoonPark/calhacks"
        timeperiod="Fall 2018"
        subtitle="Web application that provides real-time statistics
          on user presentation. Built using React and Microsoft Azure
          Custom Speech Services"
      />
      <ExperienceUnit
        logo={smartBox}
        colour="#FFFFFF"
        title="Smart Box"
        link="https://http://innovaker.com/"
        timeperiod="2016-2018"
        subtitle="Internet of Things Hub that services as a home automation
          system. Designed using a Raspberry Pi 3 running on a Flask web server"
      />
      <ExperienceUnit
        logo={nest}
        colour="#00C3E9"
        title="Nest Virtual Chatbot"
        link="https://github.com/michaelli1324/NestBot"
        timeperiod="Spring 2016"
        subtitle="Chatbot integrated with Nest Thermostat API to have
          full control of household devices. Supported on
          Messenger, Skype, Slack, SMS"
      />
      <ExperienceUnit
        logo={snake}
        colour="#6ae368"
        title="Snake"
        link="https://github.com/michaelli1324/snake"
        timeperiod="2015"
        subtitle="Replication of the classic arcade game Snake with
          modifications for difficulty and cheats. Built with javax.swing library"
      />
    </div>
  </Section>
)

export default ProjectsSection
