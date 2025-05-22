import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const inputVariants = {
    focus: {
      borderColor: "#E50914",
      boxShadow: "0 0 0 2px rgba(229, 9, 20, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@devflix.com",
      link: "mailto:contact@devflix.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-black/95 to-black z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-netflix-red">GET IN</span> TOUCH
            </h2>
            <div className="w-20 h-1 bg-netflix-red mx-auto mb-6"></div>
            <AnimatedText
              text="Let's discuss your project and bring your vision to life."
              className="max-w-2xl mx-auto text-gray-300"
              direction="up"
              type="lines"
              delay={0.3}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-netflix-dark/40 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-white focus:outline-none resize-none"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>
              
              <motion.button
                type="submit"
                className="bg-netflix-red text-white px-6 py-3 rounded font-medium inline-flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(229, 9, 20, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-netflix-red/20 text-netflix-red p-3 rounded-full">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-netflix-red transition-colors duration-300"
                    >
                      {item.details}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h4 className="text-xl font-bold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="bg-netflix-dark/80 border border-gray-800 p-3 rounded-full text-white hover:text-netflix-red hover:border-netflix-red transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-netflix-dark/80 border border-gray-800 p-3 rounded-full text-white hover:text-netflix-red hover:border-netflix-red transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-netflix-dark/80 border border-gray-800 p-3 rounded-full text-white hover:text-netflix-red hover:border-netflix-red transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16.338 16.338H13.67V12.16c0-1.005-.019-2.299-1.391-2.299-1.392 0-1.601 1.091-1.601 2.223v4.253h-2.667V8H11.1v1.09h.029c.356-.675 1.228-1.385 2.534-1.385 2.712 0 3.216 1.781 3.216 4.1v4.533zM7.003 6.91a1.938 1.938 0 110-3.877 1.938 1.938 0 010 3.877zm1.336 9.428H5.666V8H8.34v8.337zM17.668 1H2.33C1.595 1 1 1.58 1 2.297v15.406C1 18.42 1.595 19 2.33 19h15.338c.736 0 1.332-.58 1.332-1.297V2.297C19 1.58 18.404 1 17.668 1z"></path>
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-netflix-dark/80 border border-gray-800 p-3 rounded-full text-white hover:text-netflix-red hover:border-netflix-red transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 1.818c4.512 0 8.182 3.67 8.182 8.182s-3.67 8.182-8.182 8.182-8.182-3.67-8.182-8.182S7.488 3.818 12 3.818zm0 1.818c-3.512 0-6.364 2.852-6.364 6.364 0 3.512 2.852 6.364 6.364 6.364 3.512 0 6.364-2.852 6.364-6.364 0-3.512-2.852-6.364-6.364-6.364zm.021 2.8c.96 0 1.68.264 2.136.726.408.408.624.99.624 1.65 0 1.26-.87 2.214-2.034 2.214-.576 0-1.092-.318-1.272-.774h-.018v.66c0 .462-.378.84-.84.84s-.84-.378-.84-.84V9.42c0-.462.378-.84.84-.84s.84.378.84.84v.144h.018c.18-.456.696-.768 1.272-.768h.024zm-.033 1.26c-.744 0-1.338.642-1.338 1.428s.594 1.428 1.338 1.428c.744 0 1.338-.642 1.338-1.428s-.594-1.428-1.338-1.428z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;