import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

const Hero = () => {
  const downloadPDF = () => {
    const pdfPath = process.env.PUBLIC_URL + '/docs/HenrietteCv.pdf';
    window.open(pdfPath, '_blank');
  };


  return (
    <>
      <section className='hero'>
        <div className="container flexSB">
            <div className="row">
                <Title subtitle="Henriette Daughty Oloo"  title="Android || Python Developer "/>

                <div className="button">
                <button className="primary-btn" onClick={downloadPDF}>Download CV <i class="fa-solid fa-download"></i></button>
                    <button className="primary-btn">Contact Me <i className='fa fa-long-arrow-alt-right'></i></button>

                </div>

            </div>
            <div className='homePic'>
              <img src="https://res.cloudinary.com/drt1jptk7/image/upload/v1710850907/GitHen_a4be4o.jpg" alt="" />
            </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
