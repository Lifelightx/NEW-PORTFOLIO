import React from 'react'
import { motion } from 'framer-motion'

import {FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation'
function Heros() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl font-semibold">
        Hello, Welcome!
      </motion.h2>
      <TypeAnimation
        sequence={['I am a Developer', 1000, 'I am a Designer', 1000, 'I am a Programmer', 1000]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-7xl mt-2 font-bold text-[#00a5ab]"
      />
      <div className="flex space-x-6 mt-4">
        <motion.a whileHover={{ scale: 1.2 , boxShadow: "0px 0px 15px #00a5ab"}} href="#" className="text-2xl p-2 border-2 border-[#00a5ab] rounded-full text-[#008d91]"><FaGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.2 ,  boxShadow: "0px 0px 15px #00a5ab"}} href="#" className="text-2xl p-2 border-2 border-[#00a5ab] rounded-full text-[#008d91]"><FaLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.2 , boxShadow: "0px 0px 15px #00a5ab" }} href="#" className="text-2xl p-2 border-2 border-[#00a5ab] rounded-full text-[#008d91]"><FaTwitter /></motion.a>
        <motion.a whileHover={{ scale: 1.2 , boxShadow: "0px 0px 15px #00a5ab" }} href="#" className="text-2xl p-2 border-2 border-[#00a5ab] rounded-full text-[#008d91]"><FaInstagram /></motion.a>
      </div>
    </section>
  )
}

export default Heros
