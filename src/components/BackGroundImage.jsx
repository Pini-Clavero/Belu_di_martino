import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavigationLink from './NavigationLink';
import '../../styles/backGroundImage.css'
import Biografia from "../pages/biografia";
import '/styles/style.css'

function BackGroundImage() {

  const [scrolling, setScrolling] = useState(false);

  const handleScrollClick = () => {
    setScrolling(true);
    window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth', 
    });
  };
    return (
        <>
         
         <div className="backGround">
       <Link to="/"  >
       <img className='logo-backgroundImage'src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />  </Link>
         <NavigationLink />
            {/* Flecha de desplazamiento */}
    {!scrolling && (
        <div className="scroll-arrow" onClick={handleScrollClick}>
            <h2 className="arrow-down">➤</h2>
        </div>
      )}
        </div>
        <Biografia />
    
        </>
      
    )
        
}

export default BackGroundImage