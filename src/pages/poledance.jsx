import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Poledance() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/carrusel_dance.jpg" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >POLE DANCE                    </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>I am a certified Pole Dance instructor. I began my training under the guidance of Barbara Regenardt and continued to expand my skills by attending workshops at various studios across the country. I've completed instructor programs at Training Shoes, covering beginner, intermediate, and advanced levels, all under the guidance of the accomplished teacher Belen Serra.
<br></br><br></br>
Today, I bring a unique fusion of Pole Dance and a touch of Straps to create a captivating performance that blends the artistry of circus and dance in a mesmerizing Pole Straps routine.</p>
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

export default Poledance