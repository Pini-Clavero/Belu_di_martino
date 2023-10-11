import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Aerealhoop() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/aerialhoop.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' > AERIAL HOOP</h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>The art of Aerial Hoop holds a special place in my heart. I embarked on this journey in the heart of traditional circus life, learning from talented artists from around the world. Their guidance and expertise shaped me into the performer I am today. Aerial Hoop has become one of my most powerful and captivating acts, featured prominently in various events and circus seasons.</p>
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

export default Aerealhoop