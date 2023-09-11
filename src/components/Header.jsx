import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/header.css'
import inicio from '../pages/inicio'

const Header = () => {
  return (
    <header>
       <Router>
       <nav >
        <div className='contenedor'>


        <ul className='words-header left'>

          <li>
            <Link to="./pages/inicio.jsx">Biografia</Link>
          </li>
          <li>
            <Link to="./pages/inicio.jsx">Dance</Link>
          </li>
          <li>
            <Link to="./pages/inicio.jsx">Circus</Link>
          </li>
          <li>
            <Link to="./pages/inicio.jsx">Aerealhoop</Link>
          </li>
          <li>
            <Link to="./pages/inicio.jsx">Straps</Link>
          </li>
        </ul>
        <img className='imagen-header'src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />

        <ul className='words-header right'>
          <li   >
            <Link to="./pages/inicio.jsx">Performance</Link>
          </li>
          <li>
            <Link to="./pages/inicio.jsx">Teacher</Link>
          </li>
          <li>
            <Link to="./pages/modelin.jsx">Modelin</Link>
          </li>
          <li>
            <Link to="./pages/polldance.jsx">Polldance</Link>
          </li>
          <li>
            <Link to="./pages/contact.jsx">Contact</Link>
          </li>
        </ul> 
         </div>
      </nav>
       </Router>
       
    </header>
  )
}

export default Header