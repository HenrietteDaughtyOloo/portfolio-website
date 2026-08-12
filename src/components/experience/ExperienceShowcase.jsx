import React, { useState } from 'react'
import './experience-showcase.css'

const pathCards = [
  {
    id: 'izola-engineer',
    title: 'iZola Limited',
    role: 'Software Engineer',
    detail: 'Built mobile and web workflows for healthcare and enterprise using React Native, Angular, TypeScript, Django, and REST APIs.',
    accent: 'Hybrid',
    points: [
      'Developed cross-platform workflows for patient appointment scheduling, and payment handling.',
      'Integrated Django REST APIs and M-Pesa payment flows for secure healthcare transactions.',
      'Improved reliability and delivery across mobile and web, reducing friction for users and support teams.'
    ]
  },
  {
    id: 'izola-intern',
    title: 'iZola Limited',
    role: 'Software Developer Intern',
    detail: 'Supported messaging, secure API integrations, and quality testing across cross-platform product delivery.',
    accent: 'Internship',
    points: [
      'Implemented messaging and therapy-management features for mobile and web users.',
      'Worked on secure API integrations using TypeScript, Django, and REST services.',
      'Participated in testing, debugging, and product review to improve release quality.'
    ]
  },
  {
    id: 'focus-center',
    title: 'Professional path',
    role: '4 years of experience',
    detail: 'A continuous progression of technical delivery, product thinking, and cross-platform engineering.',
    accent: 'Current trajectory',
    points: [
      'Moved from implementation to product-focused engineering across mobile, web, and backend systems.',
      'Focused on reliability, usability, and building systems that support real healthcare workflows.',
      'Developed a strong foundation in cross-platform collaboration, APIs, and delivery practices.'
    ]
  },
  {
    id: 'growth-card',
    title: 'Developing impact',
    role: 'Health + payments',
    detail: 'From mobile care journeys to transactional and monitoring systems that support real users.',
    accent: 'Product focus',
    points: [
      'Designed product experiences that make healthcare and payment workflows easier to use.',
      'Delivered features that supported real users with measurable outcomes and lower friction.',
      'Built systems with reliability, monitoring, and real-time feedback in mind.'
    ]
  }
]

const ExperienceShowcase = () => {
  const [activeId, setActiveId] = useState(pathCards[0].id)
  const activeCard = pathCards.find((card) => card.id === activeId) || pathCards[0]

  return (
    <section className="experience-showcase-section">
      <div className="showcase-heading">
        <p className="eyebrow">Professional path</p>
        {/* <h2>Hover or click a step to reveal the experience points.</h2> */}
      </div>

      <div className="showcase-layout">
        <div className="showcase-left">
          <div className="showcase-grid">
            {pathCards.map((card) => (
              <article
                key={card.id}
                tabIndex={0}
                role="button"
                aria-pressed={activeId === card.id}
                className={`showcase-card ${activeId === card.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveId(card.id)}
                onFocus={() => setActiveId(card.id)}
                onClick={() => setActiveId(card.id)}
              >
                <div className="showcase-card-head">
                  <span className="card-badge">{card.accent}</span>
                </div>
                <h3>{card.title}</h3>
                <p className="showcase-role">{card.role}</p>
                <p className="showcase-description">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="showcase-detail">
          <div className="detail-card">
            <span className="detail-label">Selected step</span>
            <h3>{activeCard.title}</h3>
            <p className="detail-role">{activeCard.role}</p>
            <p className="detail-copy">{activeCard.detail}</p>
            <ul className="detail-points">
              {activeCard.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ExperienceShowcase
