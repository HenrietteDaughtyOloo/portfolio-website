import React from 'react'
import ProjectCard from "./ProjectCard"
import "./project.css"
import "../about/about.css"

const Project = () => {
  return (
    <>
    {/* <Back title="Projects"/> */}
    <section className='project padding'>
        <div className='container grid'>
            <ProjectCard/>

        </div>

    </section>
      
    </>
  )
}

export default Project
