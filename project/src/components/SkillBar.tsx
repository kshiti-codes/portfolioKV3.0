import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-netflix-red font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-netflix-dark/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-netflix-red to-neon-pink rounded-full"
          initial={{ width: 0 }}
          whileInView={{ 
            width: `${skill.level}%`,
            transition: {
              duration: 1,
              delay: 0.2 + (index * 0.1),
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;