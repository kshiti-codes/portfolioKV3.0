import React, { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Update page title
    document.title = 'DEVFLIX - Premium Developer Portfolio';
    
    // Add Netflix-style favicon
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' x='50%' text-anchor='middle' dominant-baseline='middle' fill='%23E50914'>D</text></svg>";
    }
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-netflix-red z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;