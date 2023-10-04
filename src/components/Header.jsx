import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/header.css'
import inicio from '../pages/inicio'
import Dance from '../pages/dance'
import Biografia from '../pages/biografia'
const Header = () => {
  return (
    <header>
        <Link to="/">
        <img className='imagen-header'src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />
        </Link>
        
       <nav >
        <div className='contenedor_header'>


        <ul className='words-header left'>

          <li>
            <Link to="/biografia">Biografia</Link>

          </li>
          <li>
            <Link to="/dance">Dance</Link>
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
    </header>
  )
}

export default Header