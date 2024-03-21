import "./skills.css";
import React from 'react';
import ProgressList from "./ProgressList";
const SkillsCard = ({projectsData}) => {
    return(
            <section className="container flexSB">
<div className="imaged">
    <h2>Professional Skills</h2>
        <img src="https://res.cloudinary.com/drt1jptk7/image/upload/v1711020041/microsoftHen_t0nhlv.jpg" alt="" />
       
{/* <div className="flexSB professional">        
<ul className="profesh">
            <li>Responsible</li>
            <li>Accountability</li>
        </ul>
        <ul>
            <li>Problem Solving</li>
            <li>Responsible</li>
            <br />

        </ul>
</div> */}

</div>

                   

                       <div className="skills-container">
                            <h2>Technical Skills</h2>
                            <div>
                            <ProgressList/>

                        </div>
                        <hr />
                        </div> 
<hr />

            </section>

    )
  }
  
export default SkillsCard
