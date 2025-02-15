import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Trophy, Briefcase, ChevronRight } from 'lucide-react';

const About = ({darkMode}) => {
  const educationData = [
    {
      level: "Post Graduation",
      year: "2023-2025",
      details: "Master's Degree",
      icon: <Briefcase className="w-6 h-6" />,
      highlights: ["Institute of Management and Information Technology", "Software Engineer", "CGPA: 9.0"]
    },
    {
      level: "Graduation",
      year: "2020-2023",
      details: "Bachelor's Degree",
      icon: <GraduationCap className="w-6 h-6" />,
      highlights: ["Nilagiri Degree College", "Physics", "CGPA: 7.78"]
    },
    {
      level: "12th Standard",
      year: "2019-2020",
      details: "Higher Secondary Education",
      icon: <BookOpen className="w-6 h-6" />,
      highlights: ["Nilagiri Higher Secondary School", "Science Stream", "Percentage: 74"]
    },
    {
      level: "10th Standard",
      year: "2017-2018",
      details: "Secondary Education",
      icon: <Trophy className="w-6 h-6" />,
      highlights: ["K C High School", "IT enthuastic", "Percentage: 86.6"]
    }
  ];

  return (
    <div className={`min-h-screen transition-all py-4 duration-300 ${
      darkMode ? "bg-[rgba(0,0,0,0.2)] text-white" : "bg-[rgba(250,250,250,0.2)] text-black"
    }`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#00abb1' }}>
          My Learning Journey
        </h1>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#00abb1' }}></div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={item.level}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div 
                    className="w-64 h-64 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: '#008d91',
                      boxShadow: '0 4px 20px rgba(0, 141, 145, 0.2)'
                    }}
                  >
                    <div className="text-white text-center p-6">
                      <div className="mb-3 flex justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.level}</h3>
                      <p className="text-sm opacity-90">{item.year}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div 

                className={`w-1/2 rounded-xl p-8 shadow-lg hover:text-[#008d91] ${
                  darkMode ? "bg-[rgba(0,0,0,0.3)] text-white" : "bg-[rgba(250,250,250,0.3)] text-black"
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#008d91' }}>
                  {item.details}
                </h3>
                <div className="space-y-3">
                  {item.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" style={{ color: '#008d91' }} />
                      <span className={`${darkMode ? "text-white":"text-gray-800"} hover:text-[#008d91]`}>{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {index < educationData.length - 1 && (
              <div 
                className="absolute left-1/2 h-16 w-px -bottom-16"
                style={{ backgroundColor: '#008d91' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;