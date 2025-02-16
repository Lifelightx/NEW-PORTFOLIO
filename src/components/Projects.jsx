import React, { useEffect, useRef } from 'react';
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
    githubLink: "https://github.com/Lifelightx/JANA-SAHAYAKA",
    liveLink: "https://janasahayaka.onrender.com/",
  },
  {
    title: "Hungry Hopper",
    description: "A food ordering web app with an intuitive UI and smooth user experience.",
    image: hungyHopper,
    techStack: ["React", "Node", "Tailwind CSS", "Stripe", "Express", "MongoDB"],
    githubLink: "https://github.com/Lifelightx/Hungry-Hopper",
    liveLink: "https://hungry-hopper-app.onrender.com/",
  },
  {
    title: "Book Byte",
    description: "An online library management system for tracking and managing books efficiently.",
    image: Library,
    techStack: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/Lifelightx/LIBRARY-MANAGEMENT-SYSTEM",
    liveLink: "https://library-management-system-08ty.onrender.com/",
  },
  {
    title: "Code Crafter",
    description: "An interactive coding platform with real-time collaboration features.",
    image: CodeCrfter,
    techStack: ["React", "Node.js", "WebSockets", "Monaco Editor"],
    githubLink: "https://github.com/Lifelightx/CodeCrafters",
    liveLink: "https://codecrafters-9xed.onrender.com/",
  },
  {
    title: "Text Extractor",
    description: "An OCR-based tool for extracting text from images and translating it.",
    image: TextExtractor,
    techStack: ["React", "Tesseract.js", "Google Translate API"],
    githubLink: "https://github.com/Lifelightx/textExtractor",
    liveLink: "https://lifelightx.github.io/textExtractor/",
  },
  {
    title: "Weather App",
    description: "A weather forecasting application with real-time data and interactive maps.",
    image: WeatherApp,
    techStack: ["React", "OpenWeather API", "Chart.js", "Axios"],
    githubLink: "https://github.com/Lifelightx/Weather-App",
    liveLink: "https://lifelightx.github.io/Weather-App/",
  },
  {
    title: "IMIT Invitation Card",
    description: "A digital invitation card  for inviting freshers of IMIT MCA Students.",
    image: invitationApp,
    techStack: ["HTML","CSS", "JavaScript", "GSAP"],
    githubLink: "https://github.com/Lifelightx/FRESHERINVITATION",
    liveLink: "https://lifelightx.github.io/FRESHERINVITATION/",
  },
];

const Projects = ({darkMode}) => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={`min-h-screen transition-all py-14  duration-300 ${
      darkMode ? "bg-[rgba(0,0,0,0.2)] text-white" : "bg-[rgba(250,250,250,0.25)] text-black"
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00abb1] mb-4 text-center">My Projects</h2>
        <div className="w-24 h-1 mx-auto mb-2" style={{ backgroundColor: '#00abb1' }}></div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-500 opacity-0 transform translate-y-8 ${
                darkMode ? "bg-gray-900 text-slate-300" : "bg-gray-50 border-1 text-slate-800 border-slate-200"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                
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