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
          <p className='parrafo'>Dance has always been my first love within the world of art, and it's a fundamental part of all my aerial performances. I consider myself a versatile dancer, capable of seamlessly adapting to a wide range of dance styles, from urban and contemporary to technical precision. In my videos, you'll witness the beauty of various dance forms, including but not limited to:
            <br></br>
            <strong>Femme Style</strong>: I infuse femininity, strength, and grace into my movements, creating a unique and captivating dance style.
            <br></br>
            <strong>Contemporary Dance</strong>: My interpretations are a fusion of emotion and technique, painting stories through fluid and innovative choreography.
            <br></br>
            <strong>Jazz</strong>: The rhythm and energy of jazz dance are an integral part of my artistic expression.
            <br></br>
            <strong>Urban Dance</strong>: I embrace urban dance forms, bringing their vibrant and contemporary energy to the stage.
            <br></br>
            <strong>Acrodance</strong>: The harmony of dance and acrobatics combine to create captivating performances.
            <br></br>
            <strong>Heels</strong>: I add a touch of glamour and sass with dance in heels, showcasing elegance and confidence.
            <br></br>
            <strong>Street Dance</strong>: The streets inspire me, and I love to bring street dance culture to the stage.
            <br></br>
            <strong>Lyrical Jazz</strong>: Through lyrical jazz, I evoke emotions and stories, using dance as a powerful medium.
            <br></br><br></br>
            My dance journey has been a beautiful exploration of movement and expression. I invite you to explore my world of dance through these videos, each a testament to the vibrant, versatile, and passionate artist I am.
          </p>
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