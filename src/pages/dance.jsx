import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'

function Dance() {
  return (

    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/carrusel_dance2.jpg" alt="dance banner" />
        
          <h1 className='titular scale-up-horizontal-center' >DANCE</h1>
        
      </div>
      <div className='flex_contenedor'>
        <div className='cardBox'> 
        <p className='parrafo'>Mi viaje en el mundo del arte comenzó a la temprana edad de 8 años, cuando mi madre me llevó a mis primeras clases de danza: danza clásica, contemporáneo y jazz. En ese preciso momento, supe que había descubierto mi verdadero lugar en el mundo.
<br></br>
A los 15 años, di un paso más allá y comencé a sumergirme en el mundo del arte de manera profesional. El teatro de mi ciudad me brindó la oportunidad de estudiar para ser profesora de danza, un logro que me llena de orgullo. Mientras avanzaba en mi formación como maestra de danzas, continué perfeccionando mis habilidades en el circo.
<br></br>
A los 18 años, obtuve mi título y empecé a compartir mis conocimientos como maestra de danza. Mis clases y seminarios abarcan una amplia gama de estilos, desde Femme Style hasta Heels, Street Dance, Lyrical Jazz y Jazz Contemporáneo. Mi pasión por la danza me ha permitido formar a generaciones de talentosos artistas.</p>
        </div>
        <img className='dance_imagen' src="/galeria1_dance.PNG" alt="dance imagen" />
      </div>
      <div className='contenedor'>

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
      </div>
      <BackGroundPages />
    </div>

  )

}

export default Dance