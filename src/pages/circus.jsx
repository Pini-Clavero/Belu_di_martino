import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Circus() {
  return (
    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/circus-aerialhoop1.png" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >CIRCUS                    </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>At 20, the opportunity to join a renowned circus in my country, with a long circus tradition, came knocking on my door. For a year and a half, we toured the entire country, bringing the magic of the circus to audiences of all ages. This experience deepened my connection to the circus world and allowed me to perfect my skills in aerial techniques.
          <br></br><br></br>
          Following my national tour, my circus career took me beyond the borders of my country. I had the good fortune to learn from acrobats from all over the world in international circuses in South America. This allowed me to create traditional circus acts while also exploring the contemporary circus.</p>
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

export default Circus