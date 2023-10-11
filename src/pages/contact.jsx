import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Contact() {
  return (
    <div className='fondo'>
      <Header />
      <div className='contenedor'>
        <img className='dance_banner' src="/carrusel_dance.jpg" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >CONTACT                   </h1>
      </div>
      <div className='flex_contenedor'>
        <p className='parrafo'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las</p>
        <img className='dance_imagen' src="/galeria1_dance.PNG" alt="dance imagen" />
      </div>
      <h2 className='titular_galeria'>GALLERY</h2>
      <div className='galeria_imagenes'>
     
        <img className='dance_banner' src="/carrusel_dance2.jpg" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >CONTACT   </h1>
      </div>
      <div className='contenedor_contact'>
        <p className='parrafo'>Hello, it's Belu Di Martino, and I can't wait to be a part of your next special event or project! If you're looking to add a touch of artistry and grace to your occasion, you're in the right place.
<br></br><br></br>
I offer a range of captivating performances, from mesmerizing aerial shows to dynamic dance routines. My journey in the world of dance and circus arts has been nothing short of extraordinary, and I'm here to share that magic with you.
<br></br>
I believe in making each performance unique to your vision. Your event should be as special as you are, and I'm here to ensure it's an unforgettable experience for you and your guests.
<br></br>
Please don't hesitate to get in touch with me. Let's discuss your ideas, requirements, and any questions you may have. Together, we can create something extraordinary that will leave a lasting impression.
<br></br><br></br>
I'm excited to bring art and entertainment to your world. Contact me today, and let's get started on this magical journey.

 </p>
        <div className='icons-contact'>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="mailto:tuemail@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/tunumerodetelefono">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className='form-content'>
        <h2 className='form-h2'>SEND ME AN EMAIL</h2>
        <form action="https://formsubmit.co/bdm.website23@gmail.com" method="POST">
          <label for="name">Full Name</label>
          <input type='text' name='name' id='name'></input>

          <label for="email">Email</label>
          <input type='text' name='email' id='email'></input>

          <label for="subject">Subject</label>
          <input type='text' name='subject' id='subject'></input>

          <label for="coments">Your Message</label>
          <textarea name='coments' id='coments' cols="30" rows="5"></textarea>

          <input className='btn-form' type='submit' value="SEND"></input>
        </form>

      </div>
      <BackGroundPages />
    </div>
  )
}

export default Contact