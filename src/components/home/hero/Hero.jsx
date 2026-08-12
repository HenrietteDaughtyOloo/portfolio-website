import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1 className="hero-name">
          Henriette
          <span> Oloo</span>
        </h1>

    <div className="hero-tags">
      <span>Software Engineer</span>
      <span>Cross-Platform Developer</span>
      <span className="tag-soft">Problem Solver</span>
    </div>
      <p className="hero-bio">
        I build software that solves real problems — cross-platform apps, backend APIs,
        and full-stack systems from idea to production. Based in Nairobi, building for
        the world. I’m big on Flutter, clean architecture, reliable APIs, and shipping
        software that works outside the “it works on my machine” phase.
      </p>
        <div className="cta-row">
        <a href="#projects" className="cta-primary">See it in action  <span> ↘ </span></a>
          <a href="#contact" className="cta-secondary">Let's connect <span>↗</span></a>
        </div>

        <div className="hero-meta">
          <span>Currently building &amp; open to opportunities</span>
          {/* <span>Prev. iZola Limited</span> */}
        </div>
      </div>

      <div className="hero-visual" aria-label="Portfolio highlight image">
        <div className="photo-frame">
<div className="frame-badge">
  <p>{"< />"}</p>
</div>
          <img
            // src="https://res.cloudinary.com/drt1jptk7/image/upload/v1710850907/GitHen_a4be4o.jpg"
            // src="https://res.cloudinary.com/drt1jptk7/image/upload/v1786446819/Henriette_LinkedIn_r9x4gd.jpg"
            src="https://res.cloudinary.com/drt1jptk7/image/upload/v1786447131/IMG_20260401_172248_840_wyshiu.jpg"
            alt="Henriette smiling in front of a window"
          />
          <div className="frame-caption">Henriette / 2026</div>
        </div>

        <div className="sticky-note">
          <div className="note-header">#B42</div>
          <p>
            the app had one job — I made sure it actually did it
          </p>
          {/* <span className="note-signature">— a true story</span> */}
        </div>

        {/* <div className="mini-pill">Based in Nairobi</div> */}
        <div className="open-pill">Open to remote</div>
      </div>
    </section>
  )
}

export default Hero
