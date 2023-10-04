import React, { useEffect, useState } from 'react'
import '../../styles/splashScreen.css'


const SplashScreen = () => {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setShowHeader(true);
        }, 2000);
      }, []);

      return (
        <div  className={`splash-screen ${showHeader ? 'hide' : 'show'}`}>
          <img className='logo' src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />
        </div>
      );
    };



export default SplashScreen
