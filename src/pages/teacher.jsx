import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Teacher() {
  return (
    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/teacher.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' > TEACHER                 </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>One of my greatest passions is teaching. I started at the age of 18, conducting workshops and seminars covering various styles of dance and aerial acrobatics. However, my true motivation has always been a social one – creating safe and inclusive spaces where everyone can dance comfortably, freely, and in a community of like-minded individuals. These workshops have always been named "BDM," and they've been one of the most beautiful aspects of my life's work. It's not just about the activities we share but the incredible people and communities that have formed around them.</p>
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

export default Teacher