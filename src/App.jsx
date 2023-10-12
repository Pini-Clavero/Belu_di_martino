
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
import Contact from './pages/contact';
import SplashScreen from './pages/SplashScreen';
import '../styles/style.css'
function App() {

  
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
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
        
      </div>
    </Router>
  
    </div>
  );
}

export default App
