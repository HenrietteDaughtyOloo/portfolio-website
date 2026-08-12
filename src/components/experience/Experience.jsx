import React from 'react'
import './experience.css'
import { experienceData } from '../../mydata'

const Experience = () => {
  const safeExperienceData = Array.isArray(experienceData) ? experienceData : []

  return (
    <section id="experience" className="section-block experience-section">
      <div className="experience-list">
        {safeExperienceData.map((job, index) => {
          const tags = Array.isArray(job?.tags) ? job.tags : []
          const points = Array.isArray(job?.points) ? job.points : []

          return (
            <article className="experience-entry" key={`${job?.company ?? 'job'}-${job?.role ?? index}`}>
              <div className="experience-date-group">
                <span className="experience-date">{job?.period}</span>
              </div>

              <div className="experience-role-block">
                <h3>{job?.role}</h3>
                <p>{job?.location}</p>
              </div>

              <div className="experience-summary">
                {job?.summary ? <p>{job.summary}</p> : null}

                {points.length > 0 ? (
                  <ul className="experience-points">
                    {points.map((point, pointIndex) => (
                      <li key={`${job?.role}-point-${pointIndex}`}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {tags.length > 0 ? (
                  <div className="experience-tags">
                    {tags.map((tag) => (
                      <span key={`${job?.role}-${tag}`} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="experience-badge-wrap">
                {job?.badge ? <span className="experience-badge">{job.badge}</span> : null}
                {job?.accent ? <span className="experience-badge accent">{job.accent}</span> : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
