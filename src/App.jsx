import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Heros from "./components/Heros";

const FloatingBall = ({ size, color, initialPosition }) => {
  const randomDuration = Math.random() * 20 + 10;

  return (
    <motion.div
      className="absolute rounded-full blur-xl opacity-30"
      style={{
        width: size,
        height: size,
        background: color,
        ...initialPosition
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

const AnimatedBackground = () => {
  const balls = Array(3).fill(null).map((_, i) => ({
    size: Math.random() * 250 + 150,
    color: i % 2 === 0 ? "#008d91" : "#00d5db",
    initialPosition: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {balls.map((ball, index) => (
        <FloatingBall key={index} {...ball} />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get dark mode preference from localStorage
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`relative scroll-smooth min-h-screen transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[rgb(250,250,250)] text-black"
      }`}>
      <AnimatedBackground />

      {/* Updated Navbar without glassmorphism */}
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center py-8 px-14 shadow-lg z-50 transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-white"
        }`}

        style={{
          backgroundColor: darkMode ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: darkMode ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "0 4px 10px rgba(255, 255, 255, 0.3)",
          color: darkMode ? "#fff" : "#000",
          transition: "all 0.3s ease"
        }}
      >
        <h1 className="text-xl font-[poppins] text-[#008d91] font-bold">Jeebanjyoti.</h1>

        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg font-[poppins] font-medium hover:text-[#008d91] transition duration-300 ${darkMode ? "text-white" : "text-black"
                }`}
              whileHover={{ scale: 1.1 }}
                           
            >
              {item}
            </motion.a>
          ))}
        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-[#008d91] hover:scale-110 transition-transform"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Main content with glassmorphism */}
      <main className="relative z-10">
        <div id="home" className="pt-2">
          <Heros />
          <div className="mx-4 md:mx-8 lg:mx-16 space-y-16">
            <div id="about" className=" backdrop-blur-lg rounded-xl shadow-lg"

            >
              <About darkMode={darkMode} />
            </div>
            <div id="skills" className="backdrop-blur-lg rounded-xl shadow-lg">
              <Skills darkMode={darkMode} />
            </div>
            <div id="projects" className="backdrop-blur-lg rounded-xl shadow-lg">
              <Projects darkMode={darkMode} />
            </div>
            <div id="contact" className="backdrop-blur-lg rounded-xl  shadow-lg">
              <Contact darkMode={darkMode} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer with glassmorphism */}
      {/* className="relative z-10 mt-16 bg-white bg-opacity-10 backdrop-blur-lg p-8 text-center" */}
      <footer className={`relative z-10 mt-16 p-8 text-center ${darkMode ? "bg-[rgba(0,0,0,0.5)] text-white" : "bg-[rgba(250,250,250,0.5)] text-black"
        }`}>
        <div className="flex justify-center space-x-4">
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaGithub onClick={()=> window.open("https://github.com/Lifelightx","_blank")} className="hover:text-[#008d91] cursor-pointer" size={24} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaLinkedin onClick={()=> window.open("https://www.linkedin.com/in/jeebanjyoti/","_blank")} className="hover:text-[#008d91] cursor-pointer" size={24} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaTwitter onClick={()=> window.open("https://x.com/JeebanjyotiMal7","_blank")} className="hover:text-[#008d91] cursor-pointer" size={24} />
          </motion.div>
        </div>
        <p className="mt-4 flex items-center justify-center gap-1">
  © {new Date().getFullYear()} Jeebanjyoti. Designed & Developed with <FaHeart className="text-[#008d91]" />. All Rights Reserved.
</p>

      </footer>

    </div>
  );
}