import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../../styles/footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">

      <Link to="/">

        <img className='imagen' src="../../public/BDMlogo-removebg-preview.png" alt="Logo" /> </Link>
      <div className='text'>
        <p>Belen Di Martino</p>
      </div>
      <div  className='centerButton'>
      <Link to="/contact" class="contact-button">Contact</Link>

      </div>
      <div className='icons'>
        <a href="https://www.instagram.com/beluudimartino/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@beluudimartino.dm">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="mailto:bdmbelendimartino@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://wa.me/3425355956">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <div  className='flex_designers'>
        <p className='diseñadores'>Clavero</p>

      </div>
    </footer>
  )
}

export default Footer