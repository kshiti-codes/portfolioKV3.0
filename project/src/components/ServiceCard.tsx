import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className="group bg-netflix-dark/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-800 hover:border-netflix-red transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut"
        } 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 30px -10px rgba(229, 9, 20, 0.5)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-netflix-red/20 text-netflix-red group-hover:bg-netflix-red group-hover:text-white transition-all duration-300 mx-auto">
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-center text-white group-hover:text-netflix-red transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-400 text-center">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;