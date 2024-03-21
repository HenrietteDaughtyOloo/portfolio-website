import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Heading = () => {
    const[click, setClick] = useState(false)
  return (
    <>
     <Head/> 
     <header>
        <nav className='flexSB'>
            <ul className={click ? "mobile-nav":'flexSB'} onClick={()=> setClick(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>
            <div className="start">
                <div className="button">GET TO KNOW ME</div>
            </div>
            <p className="toggle" id='tooogle' onClick={()=> setClick(!click)}>
                {click ? <i className='fa-fa-times'></i> : <i className='fa fa-bars'></i>}
            </p>

        </nav>
     </header>
    </>
  )
}

export default Heading
