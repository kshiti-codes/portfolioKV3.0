import { Service } from '../types';
import { Code, Globe, Layers, Paintbrush, Server, Smartphone } from 'lucide-react';

export const services: Service[] = [
  {
    id: 1,
    title: "Web Application Development",
    description: "Custom web applications built with React and TypeScript, focusing on performance, security, and scalability.",
    icon: Code
  },
  {
    id: 2,
    title: "Responsive UI/UX Design",
    description: "Intuitive user interfaces with smooth animations and responsive designs that work across all devices.",
    icon: Paintbrush
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "End-to-end solutions with frontend and backend integration, database design, and API development.",
    icon: Layers
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native that deliver native-like experiences.",
    icon: Smartphone
  },
  {
    id: 5,
    title: "API Development & Integration",
    description: "RESTful and GraphQL API development with seamless third-party service integrations.",
    icon: Server
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "Custom online stores with payment gateway integration, inventory management, and order processing.",
    icon: Globe
  }
];