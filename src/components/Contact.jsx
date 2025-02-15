import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:jeebanjyotimallik14@outlook.com?subject=Contact%20Form%20by${formData.name}&body=${formData.message}`;
  };

  return (
    <div className={`${darkMode ? "bg-[rgba(0,0,0,0.3)]" : "bg-[rgba(255,255,255,0.3)"} min-h-screen flex items-center justify-center p-6 transition-all`}>
      {/* Glassmorphic Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md p-8 rounded-2xl  backdrop-blur-lg border border-white/20 dark:border-gray-600/30 shadow-xl"
      >
        <h2 className="text-2xl font-bold ">
          Contact Us
        </h2>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Name Field */}
          <motion.div
            whileFocus={{ scale: 1.05 }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg  border-gray-700 border-2  focus:ring-2 focus:ring-indigo-400  outline-none transition-all"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div whileFocus={{ scale: 1.05 }} whileHover={{ scale: 1.02 }} className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg  border-gray-700 border-2  focus:ring-2 focus:ring-indigo-400  outline-none transition-al"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div whileFocus={{ scale: 1.05 }} whileHover={{ scale: 1.02 }} className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3 rounded-lg  border-gray-700 border-2  focus:ring-2 focus:ring-indigo-400  outline-none transition-al"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 mt-2 rounded-lg bg-indigo-600 text-white dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all"
            type="submit"
          >
            Send Message 🚀
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
