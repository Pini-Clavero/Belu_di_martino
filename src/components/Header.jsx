import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../../styles/header.css'
import inicio from '../pages/inicio'
import Dance from '../pages/dance'
import Biografia from '../pages/biografia'
const Header = () => {
  return (
    <header>
       
       <nav >
        <div className='contenedor_header'>
       
        <ul className='words-header left'>

          <li>
            <Link to="/dance">DANCE</Link>
          </li>
          <li>
            <Link to="/circus">CIRCUS</Link>
          </li>
          <li>
            <Link to="/aerealhoop">AERIALHOOP</Link>
          </li>
          <li>
            <Link to="/straps">STRAPS</Link>
          </li>

          <li   >
            <Link to="/performances">PERFORMANCES</Link>
          </li>
          <li>
            <Link to="/teacher">TEACHER</Link>
          </li>
          <li>
            <Link to="/modeling">MODELING</Link>
          </li>
          <li>
            <Link to="/poledance">POLEDANCE</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul> <Link to="/">
        <img className='imagen-header'src="BDMlogo-removebg-preview.png" alt="Logo" />
        </Link>
        

        </div>
      </nav>
    </header>
  )
}

export default Header
