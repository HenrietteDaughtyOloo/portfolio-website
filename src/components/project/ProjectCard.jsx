import React from 'react'
import { projectsData } from '../../mydata'

const ProjectCard = () => {
  return (
    <>
    {projectsData.map((val)=>(
                <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                  <div className='overlay'>
                  <a href={val.figmaLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-figma icon"></i>
              </a>
              <a href={val.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github icon"></i>
              </a>
                  </div>
                </div>
                <div className='details'>
                  <h2>{val.name}</h2>
                  <p>{val.work}</p>
                </div>
              </div>
      
    ))}
      
    </>
  )
}

export default ProjectCard
