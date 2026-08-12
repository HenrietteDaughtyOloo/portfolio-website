import React from 'react'
import ProjectCard from './ProjectCard'
import './project.css'
import '../about/about.css'

const Project = () => {
  return (
    <section id="project" className="section-block project">
      <div className="section-heading project-heading">
        <p>Selected work</p>
      </div>
      <div className="container grid">
        <ProjectCard />
      </div>
    </section>
  )
}

export default Project
