import React from 'react'
// import Heading from '../common/heading/Heading'
import { myAboutData } from '../../mydata'
import Title from '../common/title/Title'
// import MyAboutdata from "./MyAboutdata"

const AboutCard = () => {
  return (
    <>
    <section className='aboutHome'>
        <div className="container flexSB">
            <div className="left row">
                <img src="https://res.cloudinary.com/drt1jptk7/image/upload/v1710846661/Henriette_Gradcopy_ndjp7n.jpg" alt="" />
            </div>

            <div className='right row'>
            <Title subtitle='About Me, Henriette' />
                <div className="items">
                    {myAboutData.map((val)=>{
                        return(
                            <div className="item flexSB">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h2>{val.title}</h2>
                                    <p>{val.data}</p>
                                </div>
                            </div>
                        )
                    })}                    
                </div>
            </div>
        </div>

    </section>  
    {/* <MyAboutdata/>     */}
    </>
  )
}

export default AboutCard
