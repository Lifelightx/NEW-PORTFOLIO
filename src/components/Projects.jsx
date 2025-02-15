import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projectsData = [
  {
    title: "Jana Sahayak",
    description: "A full-featured online shopping platform with cart functionality and payment integration.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/username/e-commerce",
    liveLink: "https://e-commerce-demo.com"
  },
  {
    title: "Hungry Hopper",
    description: "A collaborative task management tool with real-time updates and team features.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "Firebase", "Tailwind CSS", "Redux"],
    githubLink: "https://github.com/username/task-manager",
    liveLink: "https://task-manager-demo.com"
  },
  {
    title: "Book Byte",
    description: "Real-time weather forecasting application with interactive maps and alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com"
  },
  {
    title: "Code Crafter",
    description: "Real-time weather forecasting application with interactive maps and alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com"
  },
  {
    title: "Text Extractor",
    description: "Real-time weather forecasting application with interactive maps and alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application with interactive maps and alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com"
  },
  {
    title: "IMIT invitation Card",
    description: "Real-time weather forecasting application with interactive maps and alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/username/weather-app",
    liveLink: "https://weather-dashboard-demo.com"
  },
];

const Projects = ({darkMode}) => {
  return (
    <section className={`min-h-screen transition-all py-4 duration-300 ${
      darkMode ? "bg-[rgba(0,0,0,0.2)] text-white" : "bg-[rgba(250,250,250,0.25)] text-black"
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.githubLink} 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.liveLink} 
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
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
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Code2 className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
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