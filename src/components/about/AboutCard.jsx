import React from 'react'
import { myAboutData } from '../../mydata'

const AboutCard = () => {
  return (
    <section className="aboutHome">
      <div className="about-layout">
        <div className="left row">
          <img
            src="https://res.cloudinary.com/drt1jptk7/image/upload/v1710846661/Henriette_Gradcopy_ndjp7n.jpg"
            alt="Henriette Daughty Oloo portrait"
          />
        </div>

        <div className="right row">
          <div className="section-header compact-header">
            <p className="eyebrow">About</p>
            <h2>Building thoughtful software for real-world problems.</h2>
          </div>

          <p className="about-intro">
            Software Engineer with hands-on experience building and supporting mobile, web, and API-driven applications across healthcare and enterprise environments. I enjoy solving meaningful problems, shipping reliable features, and making systems easier to use in practice.
          </p>

          <div className="items">
            {myAboutData.map((val) => (
              <div className="item flexSB" key={val.title}>
                <div className="img">
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className="text">
                  <h2>{val.title}</h2>
                  <p>{val.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCard
