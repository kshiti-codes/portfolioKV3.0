import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="netflix-card group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          delay: index * 0.2,
          ease: "easeOut" 
        } 
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-full overflow-hidden rounded-lg bg-netflix-dark shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300 z-[5]"></div>
        
        <div className="relative h-full flex flex-col justify-end p-6 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-netflix-red transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-xs font-medium bg-netflix-red/20 text-netflix-red rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.link && (
              <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 text-neon-blue hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <ExternalLink size={16} />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;