import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackGroundPages from '../components/BackGroundPages'
import '../../styles/danceStyle.css'
function Contact() {
  return (
    <div  className='fondo'>
      <Header />
      <div className='contenedor' >
        <img className='dance_banner' src="/carrusel_dance.jpg" alt="dance banner" />
        <h1 className='titular scale-up-horizontal-center' >CONTACT                   </h1>
      </div>
      <div className='flex_contenedor'>
      </div>
      <div className='galeria_imagenes'>
     
      </div>
      <div className='contenedor_contact'>
        <p className='parrafo'>Can you contact me for contract mys services, performarce in shows, birdays, partys. and you cant talck to me by social medias. </p>
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