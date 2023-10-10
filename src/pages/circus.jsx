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
        <p className='parrafo'>A los 20 años, la oportunidad de unirse a un circo de renombre en mi país, de larga tradición circense, tocó a mi puerta. Durante un año y medio, recorrimos todo el país, llevando la magia del circo a audiencias de todas las edades. Esta experiencia profundizó mi conexión con el mundo circense y me brindó la oportunidad de perfeccionar mis habilidades en técnicas aéreas.
<br></br>
Después de mi gira nacional, mi carrera circense me llevó más allá de las fronteras de mi país. Tuve la fortuna de aprender de acróbatas de todo el mundo en circos internacionales en Sudamérica. Esto me permitió crear números de circo tradicional mientras también exploraba el circo contemporáneo.</p>
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