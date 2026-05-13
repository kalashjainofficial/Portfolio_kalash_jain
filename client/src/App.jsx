import { useState, useEffect } from 'react'

import './App.css'
import Startpage from './Startpg.jsx'
import About_me from './About_me.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function App() {



  return (
    <>
      <div className='flex flex-col overflow-x-clip'>

        <div id="start">
          <Startpage />
        </div>

        <div id="aboutme">
          <About_me />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id='skills'>
          <Skills />
        </div>

        <div id='projects'>
          <Projects />
        </div>

        <div id='contact'>
          <Contact />
        </div>

      </div>
    </>
  )
}

export default App
