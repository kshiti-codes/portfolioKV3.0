import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-netflix-dark/30 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-netflix-red font-bold text-2xl md:text-3xl mb-6 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DEV<span className="text-white">FLIX</span>
          </motion.a>
          
          <div className="flex gap-8">
            <motion.a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#services" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} DEVFLIX. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-netflix-red transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;