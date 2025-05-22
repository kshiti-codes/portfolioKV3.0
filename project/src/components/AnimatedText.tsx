import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'words' | 'chars' | 'lines';
  duration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  direction = 'up',
  type = 'words',
  duration = 0.5,
}) => {
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 20;
    
    const directions = {
      up: { y: distance, opacity: 0 },
      down: { y: -distance, opacity: 0 },
      left: { x: distance, opacity: 0 },
      right: { x: -distance, opacity: 0 },
    };
    
    return {
      hidden: directions[direction],
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: duration,
        },
      },
    };
  };

  // Split text based on type
  const renderText = () => {
    const variants = getVariants();

    if (type === 'chars') {
      return text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: {
                ...variants.visible.transition,
                delay: delay + index * 0.04,
              },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    } else if (type === 'words') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-2"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: {
                ...variants.visible.transition,
                delay: delay + index * 0.15,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ));
    } else {
      // For lines
      return (
        <motion.div
          className={className}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: {
                ...variants.visible.transition,
                delay: delay,
              },
            },
          }}
        >
          {text}
        </motion.div>
      );
    }
  };

  return <div className={className}>{renderText()}</div>;
};

export default AnimatedText;