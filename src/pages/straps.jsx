import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Straps() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/straps2.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >AERIAL STRAPS                   </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>Aerial Straps is not just a discipline but a captivating art form that I have mastered both as a soloist and in mesmerizing duet performances. One of the highlights of my journey in this aerial realm was my recent collaboration with the renowned Vangart. Together, we graced the stages of Rosario and the iconic Corrientes Avenue in Buenos Aires - Argentina, led by the expert guidance of directors Sean McKeown, Damian Mahler, and Diego Castro.</p>
        <img className='dance_imagen' src="/galeria1_dance.PNG" alt="dance imagen" />
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
        <img className='galeria_individual' src="/galeria1_dance.PNG" alt="dance imagen" />
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Straps