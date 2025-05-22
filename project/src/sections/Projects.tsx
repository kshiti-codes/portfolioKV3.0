import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-netflix-dark via-black/95 to-black z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-netflix-red">FEATURED</span> PROJECTS
            </h2>
            <div className="w-20 h-1 bg-netflix-red mx-auto mb-6"></div>
            <AnimatedText
              text="Explore my most recent work showcasing my expertise in React and TypeScript development."
              className="max-w-2xl mx-auto text-gray-300"
              direction="up"
              type="lines"
              delay={0.3}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex bg-transparent text-white border border-netflix-red px-8 py-3 rounded text-lg font-medium hover:bg-netflix-red/10 transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(229, 9, 20, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;