import React from 'react'
import '../../styles/backGroundImage.css'
const Biografia = () => {
  return (
    <div  className='biografia'>
      <h1 className='biografia_titulo'>SOBRE MI</h1>
      <div className='biografia_flex'>
   <p className='biografia_parrafo'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las</p>
      <img className='biografia_imagen' src="/galeria1_dance.PNG" alt="dance imagen" />    </div>
      </div>
   
  )
}

export default Biografia