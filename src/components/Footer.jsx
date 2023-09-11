import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../styles/footer.css'


const Footer = () => {
  return (
        <footer className="footer">

            <div className='location'> Rosario, Argentina</div>
         
            <img className='imagen'src="../../public/BDMlogo-removebg-preview.png" alt="Logo" />
          <div className='text'>
                <p>Belen Di Martino</p>
          </div> 
             <div  className='icons'>
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
          <div  >
                <p className='diseñadores'>Clavero</p>

          </div>
        </footer>
    )
}

export default Footer