import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import esskay from '../components/assets/Screenshot 2025-08-09 at 12.05.52 AM.png'
import terr from '../components/assets/Screenshot 2025-08-09 at 12.11.04 AM.png'
import theart from '../components/assets/Screenshot 2025-08-09 at 12.13.49 AM.png'
import swaraj from '../components/assets/Screenshot 2025-08-09 at 12.24.11 AM.png'

const Projects = () => {
  const projects = [
    {
      title: "JoinCab - Car Rental Platform",
      description: "A comprehensive car rental platform built for clients, featuring vehicle booking, user management, payment integration, and real-time availability tracking. Built with modern web technologies for optimal user experience.",
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Node.js", "JavaScript", "CSS3", "Payment Gateway"],
      liveUrl: "https://joincab.com/",
      features: ["Real-time Booking", "Payment Integration", "User Dashboard", "Responsive Design"],
      category: "Web Application",
      status: "Live"
    },
    {
      title: "Mangla Plast House",
      description: "A professional business website for Mangla Plast House company, showcasing their products and services with an elegant design. Features product catalogs, company information, and contact management.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://www.manglaplasthouse.com/",
      features: ["Product Showcase", "Company Portfolio", "Contact Forms", "SEO Optimized"],
      category: "Business Website",
      status: "Live"
    },
      {
      title: "Esskay Agro Industries",
      description: "A professional business website for Esskay Agro Industries, showcasing their products and services with an elegant design. Features product catalogs, company information, and contact management.",
      image: esskay,
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://esskayagroindustries.com/",
      features: ["Product Showcase", "Company Portfolio", "Contact Forms", "SEO Optimized"],
      category: "Business Website",
      status: "Live"
    },
      {
      title: "Terranox Estates",
      description: "A professional business website for Terranox Estates, showcasing their properties and services with an elegant design. Features property listings, company information, and contact management.",
      image: terr,
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://terranoxestates.com/",
      features: ["Property Showcase", "Company Portfolio", "Contact Forms", "SEO Optimized"],
      category: "Business Website",
      status: "Live"
    },
      {
      title: "The art forever",
      description: "A professional business website for The art forever company, showcasing their products and services with an elegant design. Features product catalogs, company information, and contact management.",
      image: theart,
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://theartforever.com/",
      features: ["Product Showcase", "Company Portfolio", "Contact Forms", "SEO Optimized"],
      category: "Business Website",
      status: "Live"
    },
      {
      title: "Swaraj Green Energy",
      description: "A professional business website for Swaraj Green Energy company, showcasing their products and services with an elegant design. Features product catalogs, company information, and contact management.",
      image: swaraj,
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://swarajgreenenergy.com/",
      features: ["Product Showcase", "Company Portfolio", "Contact Forms", "SEO Optimized"],
      category: "Business Website",
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications built for clients and personal growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Star size={12} className="text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-gray-700 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <span>View Live Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in Working Together?</h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Let's Talk</span>
              <Users size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;