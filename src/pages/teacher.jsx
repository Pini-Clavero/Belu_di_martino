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
        <img className='dance_banner' src="/carrusel_dance.jpg" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' > TEACHER                 </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>At the age of 15, I took the next step and delved into the world of art professionally. The theater in my city offered me the opportunity to study to become a dance teacher, an achievement that fills me with pride. As I advanced in my training as a dance teacher, I continued to hone my skills in the circus.
<br></br>
At 18, I earned my teaching degree and started sharing my knowledge as a dance teacher. My classes and workshops cover a wide range of styles, from Femme Style to Heels, Street Dance, Lyrical Jazz, and Contemporary Jazz. My passion for dance has allowed me to nurture generations of talented artists.</p>
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