import './skills.css'
import React from 'react'
import { skillGroups } from '../../mydata'

const SkillsCard = () => {
  return (
    <section className="skills-zoo">
      <div className="section-header skills-header">
        <h2>What I work with</h2>
        <div className="header-note">Product • code • problem-solving</div>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className={`skill-card ${group.tone}`}>
            <div className="skill-title-row">
              <span className="skill-bullet" aria-hidden="true">✦</span>
              <h3>{group.title}</h3>
            </div>
            <p className="skill-subtitle">{group.subtitle}</p>
            <div className="skill-pills">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsCard
