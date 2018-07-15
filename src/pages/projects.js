import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'

import '../assets/scss/work/style.scss'

const WorkPage = () => (
  <div className="work container animated fadeIn">

    <h1 className="work-projectsHeading">Experience</h1>
    <ExperienceSection />

    <h1 className="work-projectsHeading">Projects</h1>
    <ProjectsSection />

  </div>
)

export default WorkPage
