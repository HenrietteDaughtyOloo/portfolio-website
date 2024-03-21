import React from 'react'
import "./skills.css"
import { progressData } from '../../mydata';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


const ProgressList = () => {
    
      return (
        // <div className="container">
          <div className='prof-items' >
    {progressData.map((item, index) => (
      <div  key={index} style={{ marginBottom: '20px' }}>
        <p>{item.label}</p>
        <CircularProgressbar
          value={item.progress}
          text={`${item.progress}%`}
          strokeWidth={10}
          styles={buildStyles({
            textColor: '#03787C',
            pathColor: `rgba(62, 152, 199, ${item.progress / 100})`,
            trailColor: '#03787C',
          })}
          radius={100}

        />
      </div>
    ))}
  </div>
//   </div>
      );
    };
    

export default ProgressList
