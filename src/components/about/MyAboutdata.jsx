import React from "react";
import { myAboutData } from "../../mydata";

const MyAboutdata = () => {
  return (
    <>
    <section className="myAboutData">
        <div className="container grid">
            {myAboutData.map((val)=>{
                return(
                    <div className="box flex">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1>{val.data}</h1>
                            <h3>{val.title}</h3>
                        </div>

                    </div>
                )
            })}
        </div>
        </section>      
    </>
  )
}

export default MyAboutdata
