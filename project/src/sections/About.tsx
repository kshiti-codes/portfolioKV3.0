import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Star } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

const About: React.FC = () => {
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
      id="about" 
      ref={sectionRef}
      className="section-padding bg-netflix-dark relative section-glow blue"
    >
      <div className="absolute inset-0 bg-gradient-radial from-netflix-dark/20 to-black/90 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-reveal">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-netflix-red">EXPLORE</span> MY EXPERTISE
            </h2>
            <div className="w-20 h-1 bg-netflix-red mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-reveal">
            <AnimatedText
              text="React & TypeScript Specialist"
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
              direction="up"
              type="lines"
            />
            
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                I craft high-performance, visually stunning digital experiences that captivate users and drive business results. With over 5 years of experience specializing in React, TypeScript, and modern frontend technologies, I transform complex requirements into elegant solutions.
              </p>
              <p className="leading-relaxed">
                My approach combines technical excellence with an eye for design, ensuring applications that are not only functional but also beautiful and intuitive. I'm passionate about creating responsive, accessible interfaces that provide exceptional user experiences across all devices.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-netflix-dark/80 border border-gray-800 rounded-full px-4 py-2">
                <Star className="text-netflix-red" size={20} />
                <span className="text-white">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-netflix-dark/80 border border-gray-800 rounded-full px-4 py-2">
                <Star className="text-netflix-red" size={20} />
                <span className="text-white">50+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2 bg-netflix-dark/80 border border-gray-800 rounded-full px-4 py-2">
                <Star className="text-netflix-red" size={20} />
                <span className="text-white">100% Client Satisfaction</span>
              </div>
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mt-8 bg-netflix-red text-white px-6 py-3 rounded font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(229, 9, 20, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </div>

          <div className="text-reveal">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;