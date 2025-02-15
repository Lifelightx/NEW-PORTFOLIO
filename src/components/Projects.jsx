import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Janasahayak from '../assets/jana-sahayak.jpg'
import hungyHopper from '../assets/proj2.png'
import Library from '../assets/proj3.png'
import CodeCrfter from '../assets/proj4.png'
import TextExtractor from '../assets/proj5.png'
import WeatherApp from '../assets/proj6.png'
import invitationApp from '../assets/proj7.png'

const projectsData = [
  {
    title: "Jana Sahayak",
    description: "A grievance management system that enables citizens to lodge complaints, track their status, and receive resolutions efficiently.",
    image: Janasahayak,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/username/jana-sahayak",
    liveLink: "https://jana-sahayak.com",
  },
  {
    title: "Hungry Hopper",
    description: "A food ordering web app with an intuitive UI and smooth user experience.",
    image: hungyHopper,
    techStack: ["React", "Node", "Tailwind CSS", "Stripe", "Express", "MongoDB"],
    githubLink: "https://github.com/username/hungry-hopper",
    liveLink: "https://hungryhopper-demo.com",
  },
  {
    title: "Book Byte",
    description: "An online library management system for tracking and managing books efficiently.",
    image: Library,
    techStack: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/username/book-byte",
    liveLink: "https://bookbyte-demo.com",
  },
  {
    title: "Code Crafter",
    description: "An interactive coding platform with real-time collaboration features.",
    image: CodeCrfter,
    techStack: ["React", "Node.js", "WebSockets", "Monaco Editor"],
    githubLink: "https://github.com/username/code-crafter",
    liveLink: "https://codecrafter-demo.com",
  },
  {
    title: "Text Extractor",
    description: "An OCR-based tool for extracting text from images and translating it.",
    image: TextExtractor,
    techStack: ["React", "Tesseract.js", "Google Translate API"],
    githubLink: "https://github.com/username/text-extractor",
    liveLink: "https://text-extractor-demo.com",
  },
  {
    title: "Weather App",
    description: "A weather forecasting application with real-time data and interactive maps.",
    image: WeatherApp,
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com",
  },
  {
    title: "IMIT Invitation Card",
    description: "A digital invitation card  for inviting freshers of IMIT MCA Students.",
    image: invitationApp,
    techStack: ["HTML","CSS", "JavaScript", "GSAP"],
    githubLink: "https://github.com/username/imit-invitation",
    liveLink: "https://imit-invitation-demo.com",
  },
];

const Projects = ({darkMode}) => {
  return (
    <section className={`min-h-screen transition-all py-4 duration-300 ${
      darkMode ? "bg-[rgba(0,0,0,0.2)] text-white" : "bg-[rgba(250,250,250,0.25)] text-black"
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00abb1] mb-4 text-center">My Projects</h2>
        <div className="w-24 h-1 mx-auto mb-12" style={{ backgroundColor: '#00abb1' }}></div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={` rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 ${darkMode?"bg-gray-900":"bg-gray-50 border-1 border-slate-200"}`}
            >
              {/* Project Image */}
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-[#008d91] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#008d91] transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#008d91] transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;