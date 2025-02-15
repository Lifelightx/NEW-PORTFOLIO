import React from 'react'

function Skills({darkMode}) {
  return (
    <div className={`min-h-screen transition-all py-4 duration-300 ${
      darkMode ? "bg-[rgba(0,0,0,0.3)] text-white" : "bg-[rgba(250,250,250,0.3)] text-black"
    }`}>
      
    </div>
  )
}

export default Skills
