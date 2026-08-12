import React from 'react'
import { projectsData } from '../../mydata'

const ProjectCard = () => {
  return (
    <>
      {projectsData.map((val, index) => (
        <div key={`${val.name}-${index}`} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt={val.name} />
            <div className='overlay'>
              {val.figmaLink ? (
                <a href={val.figmaLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma icon"></i>
                </a>
              ) : null}
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
