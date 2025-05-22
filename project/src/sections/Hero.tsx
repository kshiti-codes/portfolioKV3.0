import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    const textElements = section?.getElementsByClassName('text-reveal');

    if (section) {
      observer.observe(section);
    }

    if (textElements) {
      Array.from(textElements).forEach((element) => {
        observer.observe(element);
      });
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      if (textElements) {
        Array.from(textElements).forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden section-glow red"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-netflix-dark z-10"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center mt-16">
        <div className="text-reveal">
          <AnimatedText
            text="MEET YOUR NEXT"
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-gray-300 mb-2"
            direction="up"
            type="words"
            delay={0.5}
          />
          <AnimatedText
            text="DEVELOPER"
            className="text-4xl md:text-6xl lg:text-8xl font-black tracking-wide text-white mb-6"
            direction="up"
            type="chars"
            delay={1}
            duration={0.7}
          />
        </div>

        <div className="text-reveal">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Crafting premium digital experiences with React and TypeScript. 
            Where innovation meets pixel-perfect execution.
          </p>
        </div>

        <div className="text-reveal">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="#projects"
              className="bg-netflix-red text-white px-8 py-3 rounded text-lg font-medium min-w-[180px]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px 5px rgba(229, 9, 20, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-transparent text-white border border-white px-8 py-3 rounded text-lg font-medium min-w-[180px] hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          delay: 3
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;