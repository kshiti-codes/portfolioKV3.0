import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-netflix-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-netflix-dark/80 z-0"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-netflix-red/10 blur-[100px] z-0"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-blue/5 blur-[120px] z-0"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-netflix-red">PROFESSIONAL</span> SERVICES
            </h2>
            <div className="w-20 h-1 bg-netflix-red mx-auto mb-6"></div>
            <AnimatedText
              text="Tailored solutions to elevate your digital presence and achieve your business goals."
              className="max-w-2xl mx-auto text-gray-300"
              direction="up"
              type="lines"
              delay={0.3}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;