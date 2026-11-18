import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Connect from './pages/Connect/Connect';
import Testimonial from './pages/Testimonial/Testimonial';
import Projects from './pages/Projects/Projects';
import Particlebackground from './components/Particlebackground/Particlebackground';

import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
   const location = useLocation();
  return (
    <div className="app">
      <Particlebackground />

      <div className="app-content">
      <Sidebar/>
       <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="/Projects/*" element={<Projects />} />
      </Routes>
      </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
