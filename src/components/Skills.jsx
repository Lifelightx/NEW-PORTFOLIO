import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Layout, 
  FileJson, 
  Github,
  
  Box,
  Monitor
} from 'lucide-react';
import { VscCode } from 'react-icons/vsc';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaGit } from 'react-icons/fa';
import { DiGithub } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';

const skillsData = [
  { 
    name: 'React', 
    level: 90, 
    category: 'Frontend',
    icon: <FaReact className="w-6 h-6" />,
    color: 'bg-blue-500',
    description: 'Building modern web applications'
  },
  { 
    name: 'Node.js', 
    level: 85, 
    category: 'Backend',
    icon: <FaNodeJs className="w-6 h-6" />,
    color: 'bg-green-500',
    description: 'Server-side JavaScript runtime'
  },
  { 
    name: 'MongoDB', 
    level: 80, 
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-emerald-500',
    description: 'NoSQL database management'
  },
  { 
    name: 'SQL', 
    level: 85, 
    category: 'Database',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-purple-500',
    description: 'Relational database management'
  },
  { 
    name: 'Python', 
    level: 88, 
    category: 'Language',
    icon: <FaPython className="w-6 h-6" />,
    color: 'bg-yellow-600',
    description: 'Versatile programming language'
  },
  { 
    name: 'Java', 
    level: 82, 
    category: 'Language',
    icon: <FaJava className="w-6 h-6" />,
    color: 'bg-red-500',
    description: 'Object-oriented programming'
  },
  { 
    name: 'Express', 
    level: 85, 
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    color: 'bg-gray-500',
    description: 'Node.js web framework'
  },
  { 
    name: 'Tailwind', 
    level: 90, 
    category: 'Frontend',
    icon: <SiTailwindcss className="w-6 h-6" />,
    color: 'bg-teal-500',
    description: 'Utility-first CSS framework'
  },
  { 
    name: 'HTML/CSS', 
    level: 95, 
    category: 'Frontend',
    icon: <FaHtml5 className="w-6 h-6" />,
    color: 'bg-orange-500',
    description: 'Web markup and styling'
  },
  { 
    name: 'Django', 
    level: 78, 
    category: 'Backend',
    icon: <Box className="w-6 h-6" />,
    color: 'bg-green-600',
    description: 'Python web framework'
  },
  { 
    name: 'Flask', 
    level: 75, 
    category: 'Backend',
    icon: <Box className="w-6 h-6" />,
    color: 'bg-gray-600',
    description: 'Lightweight Python framework'
  },
  { 
    name: 'JavaScript', 
    level: 92, 
    category: 'Language',
    icon: <DiJavascript className="w-6 h-6" />,
    color: 'bg-yellow-400',
    description: 'Web programming language'
  },
  { 
    name: 'GSAP', 
    level: 70, 
    category: 'Animation',
    icon: <Monitor className="w-6 h-6" />,
    color: 'bg-green-400',
    description: 'Professional animation library'
  },
  { 
    name: 'Git/GitHub', 
    level: 88, 
    category: 'Tools',
    icon: <Github className="w-6 h-6" />,
    color: 'bg-slate-500',
    description: 'Version control system'
  },
  { 
    name: 'POST Man', 
    level: 88, 
    category: 'Tools',
    icon: <SiPostman className="w-6 h-6" />,
    color: 'bg-orange-700',
    description: 'API Testing system'
  }
];

const categories = [...new Set(skillsData.map(skill => skill.category))];

const SkillCard = ({ skill, index, darkMode }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${skill.color} text-white`}>
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {skill.description}
          </p>
          <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className={`absolute top-0 left-0 h-full ${skill.color}`}
            />
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Proficiency
            </span>
            <span className="text-sm font-semibold">{skill.level}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryButton = ({ category, isSelected, onClick,darkMode }) => {
  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full flex items-center space-x-2
        ${darkMode ?"text-white":"text-white"}
        ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
      }`}
    >
      {category === 'Frontend' && <Layout className="w-4 h-4" />}
      {category === 'Backend' && <Server className="w-4 h-4" />}
      {category === 'Database' && <Database className="w-4 h-4" />}
      {category === 'Language' && <Code2 className="w-4 h-4" />}
      {category === 'Tools' && <Github className="w-4 h-4" />}
      {category === 'Animation' && <Monitor className="w-4 h-4" />}
      {category === 'all' && <Code2 className="w-4 h-4" />}
      <span>{category}</span>
    </motion.button>
  );
};

const Skills = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div 
      ref={componentRef}
      className={`min-h-screen py-12 ${
        darkMode ? "bg-[rgba(0,0,0,0.25)] text-white" : "bg-[rgba(255,255,255,0.13)] text-gray-900"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 ">
            Expertise across various technologies and tools
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <CategoryButton
            category="all"
            isSelected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
          />
          {categories.map(category => (
            <CategoryButton
              key={category}
              darkMode={darkMode}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard 
              darkMode={darkMode} 
              key={skill.name} 
              skill={skill} 
              index={index} 
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;