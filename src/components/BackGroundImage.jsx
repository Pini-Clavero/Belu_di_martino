import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavigationLink from './NavigationLink';
import '../../styles/backGroundImage.css'
import Biografia from "../pages/biografia";
function BackGroundImage() {
    return (
        <> 
         <div className="backGround">
       <Link to="/"  >
       <img className='logo-backgroundImage'src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />  </Link>
         <NavigationLink />
        </div>
        <Biografia />
        
        </>
      
    )
}

export default BackGroundImage