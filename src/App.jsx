
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import BackGroundImage from './components/BackGroundImage'
import NavigationLink from './components/NavigationLink';
import Header from './components/Header'
import Footer from './components/Footer'
import Dance from './pages/dance';
import Aerealhoop from './pages/aerealhoop';
import Circus from './pages/circus';
import Modeling from './pages/modeling';
import Performances from './pages/performances';
import Poledance from './pages/poledance';
import Straps from './pages/straps';
import Teacher from './pages/teacher';
import Biografia from './pages/biografia';
import SplashScreen from './pages/splashScreen';
import '../styles/style.css'
function App() {
  const [scrolling, setScrolling] = useState(false);

  const handleScrollClick = () => {
    setScrolling(true);
    // Desplazamiento suave hacia abajo
    window.scrollTo({
      top: window.innerHeight, // Desplázate a la altura de la ventana
      behavior: 'smooth', // Hace que el desplazamiento sea suave
    });
  };
  return (
    <div className="App">
    <Router>
      <div>
        <SplashScreen />
        

        <Routes>

          <Route path="/" element={<BackGroundImage />} />
          <Route path="/aerealhoop" element={<Aerealhoop />} />
          <Route path="/circus" element={<Circus />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/modeling" element={<Modeling />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/poledance" element={<Poledance />} />
          <Route path="/straps" element={<Straps />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/biografia" element={<Biografia />} />

        </Routes>

        <Footer />
        
      </div>
    </Router>
       {/* Flecha de desplazamiento */}
       {!scrolling && (
        <div className="scroll-arrow" onClick={handleScrollClick}>
          <div className="arrow-down"></div>
        </div>
      )}
    </div>
  );
}

export default App
