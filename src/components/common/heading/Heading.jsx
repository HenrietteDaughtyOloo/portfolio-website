import React, { useState } from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Heading = () => {
    const[click, setClick] = useState(false)

    const [clickedLink, setClickedLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setClickedLink(linkName);
    };


  return (
    <>
     <Head/> 
     <header>
        <nav className='flexSB'>
            <ul className={click ? "mobile-nav":'flexSB'} onClick={()=> setClick(false)}>
                <li><Link to="/" className={clickedLink === "/" ? "clicked" : ""} onClick={() => handleLinkClick("/")}>Home</Link></li>
                <li><Link to="/about" className={clickedLink === "about" ? "clicked" : ""} onClick={() => handleLinkClick("about")}>About</Link></li>
                <li><Link to="/skills" className={clickedLink === "skills" ? "clicked" : ""} onClick={() => handleLinkClick("skills")}>Skills</Link></li>
                <li><Link to="/projects" className={clickedLink === "projects" ? "clicked" : ""} onClick={() => handleLinkClick("projects")}>Projects</Link></li>
                <li><Link to="/contact" className={clickedLink === "contact" ? "clicked" : ""} onClick={() => handleLinkClick("contact")}>Contact</Link></li>

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
